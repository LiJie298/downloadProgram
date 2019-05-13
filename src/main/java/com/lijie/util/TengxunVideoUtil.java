package com.lijie.util;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;


public class TengxunVideoUtil {

    private static String INFOBASEURL = "https://h5vv.video.qq.com/getinfo?callback=?";
    private static String RESLBASEURL = "%s%s?vkey=%s&guid=%s&br=%s&platform=2&fmt=auto&level=0&sdtfrom=v1010";
    private static ScriptEngine se;

    static {
        try {
            ScriptEngineManager sem = new ScriptEngineManager();
            se = sem.getEngineByExtension("js");
            String filePath = ClassLoader.getSystemClassLoader().getResource("tecentIframe.js").getPath();
            se.eval(new FileReader(filePath));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (ScriptException e) {
            e.printStackTrace();
        }
    }


    /**
     * 根据vid 获取视频地址信息
     *
     * @param videoUrl
     * @return
     */
    public static String getTecentRealURL(String videoUrl) {
        String realAddress = "";
        if (videoUrl.contains("vid")) {
            String vid = videoUrl.substring(videoUrl.indexOf("=") + 1);
            String formatUrl = getTecentVideoInfoUrl(formatUrl(vid));
            realAddress = getVideoFinalAddress(formatUrl);
        }
        return realAddress;
    }


    /**
     * 获取腾讯视频的解析地址
     *
     * @param url exp:https://h5vv.video.qq.com/getinfo?callback=?&platform=11001&charge=0&otype=json&ehost=https%3A%2F%2Fv.qq.com&sphls=0&sb=1&nocache=0&_rnd=1557658510&guid=570dbc587fc75f914b67ef6de15d9fda&appVer=V2.0Build9502&vids=u0852tgbabl&defaultfmt=auto
     * @return
     */
    private static String getTecentVideoInfoUrl(String url) {
        int f = (int) (System.currentTimeMillis() / 1000);
        String res = "";
        try {
            res = (String) se.eval("eval(\"getVideoUrl('" + url + "'," + f + ")\")");
        } catch (ScriptException e) {
            e.printStackTrace();
        }
        return res;
    }


    /**
     * 补全视频地址
     *
     * @param vid
     * @return
     */
    private static String formatUrl(String vid) {
        Map<String, Object> param = new HashMap<>();
        param.put("platform", "11001");
        param.put("sdtfrom", "v1010");
        param.put("charge", 0);
        param.put("otype", "json");
        param.put("ehost", URLEncoder.encode("hhtp://v.qq.com"));
        param.put("sphls", 0);
        param.put("sb", 1);
        param.put("nocache", 0);
        param.put("_rnd", System.currentTimeMillis() / 1000);
        param.put("guid", getNewGUID());
        param.put("appVer", "V2.0Build9502");
        param.put("vids", vid);
        param.put("defaultfmt", "auto");
        StringBuffer stringBuffer = new StringBuffer(INFOBASEURL);
        stringBuffer.append("tvp_request_getinfo_callback_99205");
        for (Map.Entry<String, Object> e : param.entrySet()) {
            stringBuffer.append("&").append(e.getKey()).append("=").append(String.valueOf(e.getValue()));
        }
        return stringBuffer.toString();
    }

    /**
     * 获取guid
     *
     * @return
     */
    private static String getNewGUID() {
        StringBuffer stringBuffer = new StringBuffer("");
        for (int i = 0; i < 8; i++) {
            stringBuffer.append(Integer.toHexString((int) (65536 * (1 + Math.random()))).substring(1));
        }
        return stringBuffer.toString();
    }


    private static String getVideoFinalAddress(String url) {
        String finalStr = "";
        Random random = new Random();
        String guid = url.substring(url.indexOf("guid=") + 5);
        String res = HttpHelper.getData(url, new HttpAttr("application/json; charset=utf-8"), "", "utf-8");
        if (!res.equals("timeout")) {
            JSONObject jsonObject = JSONObject.parseObject(res.substring(res.indexOf("{"),res.length()-1));
            JSONObject fl = jsonObject.getJSONObject("vl");
            if (!fl.isEmpty()) {
                JSONArray jsonArray = fl.getJSONArray("vi");
                for (int i = 0; i < jsonArray.size(); i++) {
                    JSONObject temp = jsonArray.getJSONObject(i);
//                    String title = temp.getString("ti");
                    int br = temp.getInteger("br");
                    String fvkey = temp.getString("fvkey");
                    String fn = temp.getString("fn");
                    JSONArray ul = temp.getJSONObject("ul").getJSONArray("ui");
                    int ulNum = random.nextInt(ul.size());
                    JSONObject urlJSON = ul.getJSONObject(ulNum);
                    String realStr = urlJSON.getString("url");
                    finalStr = String.format(RESLBASEURL, realStr, fn, fvkey, guid, br);
                    break;
                }
            }
        }
        return finalStr;
    }

    public static void main(String[] args) {
        String url = "https://v.qq.com/iframe/preview.html?vid=w0870pdznrt";
        System.out.println(TengxunVideoUtil.getTecentRealURL(url));

    }


}
