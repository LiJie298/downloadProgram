package com.lijie;

import com.alibaba.fastjson.JSONObject;
import com.lijie.util.HttpAttr;
import com.lijie.util.HttpHelper;
import org.apache.commons.codec.binary.Base64;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Main {
    private static final String CURL = "";
    private String downloadPath;

    ExecutorService service = Executors.newFixedThreadPool(10);


    public String getRealURL(String url) {
        String fUrl = String.format(CURL, url);
        String first = HttpHelper.getData(fUrl, new HttpAttr(), null, "utf-8");
        JSONObject jsonObject = JSONObject.parseObject(first);
        JSONObject head = jsonObject.getJSONObject("HEADER");
        String curl = jsonObject.getString("C");
        String c2 = jsonObject.getString("C2");
        String ts2 = jsonObject.getString("ts2");
        String te2 = jsonObject.getString("te2");
        String temp = HttpHelper.getData(c2, new HttpAttr(), null, "utf-8");
        curl = curl.substring(0, curl.indexOf("&utid")) + "&utid=" + temp.substring(temp.indexOf(ts2) + ts2.length(), temp.lastIndexOf(te2)) + curl.substring(curl.indexOf("&r"));
        String refer = new String(Base64.decodeBase64(head.getString("Referer")));
        String cookie = new String(Base64.decodeBase64(head.getString("Cookie")));
        String userAgent = new String(Base64.decodeBase64(head.getString("User-Agent")));
        String second = HttpHelper.getData(curl, new HttpAttr(userAgent, cookie, refer), null, "utf-8");
        boolean is = true;
        for (int i = 0; i < 2; i++) {
            if (second.indexOf("异常") != -1 || second.indexOf("重新") != -1 || second.indexOf("失败") != -1) {
                System.out.println("解析失败:" + url);
                second = HttpHelper.getData(curl, new HttpAttr(userAgent, cookie, refer), null, "utf-8");
            } else {
                is = false;
                continue;
            }
        }
        if (is) {
            return null;
        }
        String res = HttpHelper.postData(fUrl, new HttpAttr("application/json"), second, "utf-8");
        JSONObject sjson = JSONObject.parseObject(res);
        System.out.println(sjson);
        StringBuffer ress = new StringBuffer("");
        sjson.getJSONArray("V").stream().forEach(m -> {
            ress.append(((JSONObject) m).getString("U") + ",@@,");
        });
        return ress.toString();
    }


    public static void main(String[] args) {
        Main ma = new Main();
        if (args.length < 1) {
            System.exit(1);
        } else {
            ma.setDownloadPath(args[0]);
        }
//        ma.getRealURL("https://v.youku.com/v_show/id_XMzk4NjAyODMxNg==.html?spm=a2h0j.11185381.listitem_page1.5!7~A&&s=66efbfbd65efbfbd3919");
        ma.start();
    }

    public void taskDis(List<TaskItem> tasks) {
        for (int i = 0; i < tasks.size(); i++) {
            TaskItem temp = tasks.get(i);
            String realUrl = getRealURL(temp.getUrl());
            String title = temp.getTitle();
            if (realUrl.indexOf(",@@,") > 0) {
                String[] childUrls = realUrl.split(",@@,");
                List<Future> futures = new ArrayList<>();
                System.out.println("开始下载：" + title + ",共有 " + childUrls.length + "个任务");
                for (int j = 0; j < childUrls.length; j++) {
                    Future<Boolean> future = service.submit(new TaskDownload(childUrls[j], downloadPath + File.separator + title + "-" + j, com.lijie.util2.HttpClientHelper.createHttpClient()));
                    futures.add(future);
                }
                for (int j = 0; j < futures.size(); j++) {
                    try {
                        futures.get(j).get();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    } catch (ExecutionException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println("title: " + title + "  下载完成");
            }

        }


    }

    public void start() {
        try {
            String homeUrl1 = "https://v.youku.com/v_show/id_XMjY3MTQ2MDE0OA==.html?spm=a2h1n.8261147.reload_1.1~3~A&s=da58c2950acb11e6bdbb";
            String homeUrl2 = "https://v.youku.com/v_show/id_XMjcxMTgxMTY1Ng==.html?spm=a2h0j.11185381.listitem_page2.5~A";
            List<TaskItem> tasks = new ArrayList<>();
            Elements pages1 = Jsoup.connect(homeUrl1).get().select("#listitem_page1").get(0).children();
            Elements pages2 = Jsoup.connect(homeUrl2).get().select("#listitem_page2").get(0).children();
            Iterator<Element> iterable1 = pages1.iterator();
            Iterator<Element> iterable2 = pages2.iterator();
            while (iterable1.hasNext()) {
                Element element = iterable1.next();
                TaskItem taskItem = new TaskItem(element.attr("title"), "https://" + element.select("a").attr("href"));
                tasks.add(taskItem);
            }
            while (iterable2.hasNext()) {
                Element element = iterable2.next();
                TaskItem taskItem = new TaskItem(element.attr("title"), "https://" + element.select("a").attr("href"));
                tasks.add(taskItem);
            }
            System.out.println(tasks.size());
            taskDis(tasks);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    class TaskItem {
        private String title;
        private String url;


        public TaskItem(String title, String url) {
            this.title = title;
            this.url = url;
        }

        public String getTitle() {
            return title;
        }

        public String getUrl() {
            return url;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public void setUrl(String url) {
            this.url = url;
        }
    }

    public void setDownloadPath(String downloadPath) {
        this.downloadPath = downloadPath;
    }
}
