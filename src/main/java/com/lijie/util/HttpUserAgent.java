package com.lijie.util;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static com.apple.eio.FileManager.getResource;

public class HttpUserAgent {

    private static String configFilePath;
    private static List<String> userAgents = new ArrayList<>();
    private static List<String> AppleUserAgents = new ArrayList<>();
    private static List<String> AndroidUserAgents = new ArrayList<>();
    private static List<String> PcUserAgents = new ArrayList<>();
    private static List<String> MobileUserAgents = new ArrayList<>();
    private static List<String> WindowsUserAgents = new ArrayList<>();
    private static List<String> MacUserAgents = new ArrayList<>();
    public static String SYS_WINDOWS = "windows";
    public static String SYS_MAC = "mac";
    public static String SYS_ANDROID = "android";
    public static String SYS_IPHONE = "iphone";
    public static String TY_PC = "pc";
    public static String TY_MOBILE = "mobile";

    static {
        try {
            String file = ClassLoader.getSystemClassLoader().getResource("UserAgents").getPath();
            initConfig(file);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private static void initConfig(String filePath) throws Exception{
        File file = new File(filePath);
        if(file.isFile()){
            FileInputStream fis = new FileInputStream(file);
            InputStreamReader isr = new InputStreamReader(fis, "UTF-8");
            BufferedReader br = new BufferedReader(isr);
            String line = "";
            while ((line = br.readLine()) != null) {
                String[] temp = line.split(" \\| ");
                if( temp.length==3){
                    if(temp[1].equalsIgnoreCase(SYS_WINDOWS)){
                        WindowsUserAgents.add(temp[2]);
                    }else if(temp[1].equalsIgnoreCase(SYS_MAC)){
                        MacUserAgents.add(temp[2]);
                    }
                    PcUserAgents.add(temp[2]);
                }else if(temp.length==2){
                    PcUserAgents.add(temp[1]);
                }
            }
            br.close();
            isr.close();
            fis.close();
        }else {
            throw  new Exception("can not found file : userAgents");
        }
    }

    /**
     * 获取pc 端 的 user-agent 信息
     * @return
     */
    public static String getPCUserAgent() {
        Random random = new Random();
        return PcUserAgents.get(random.nextInt(WindowsUserAgents.size()));
    }

}
