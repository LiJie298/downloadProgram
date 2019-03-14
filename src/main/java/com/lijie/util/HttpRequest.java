package com.lijie.util;

import org.apache.http.HttpEntity;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.LayeredConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.util.EntityUtils;

import javax.net.ssl.SSLContext;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;

/**
 * Created by jinxf1 on 2017/7/13.
 */
public class HttpRequest {

    private static PoolingHttpClientConnectionManager cm = null;

    static {
        LayeredConnectionSocketFactory sslsf = null;
        try {
            sslsf = new SSLConnectionSocketFactory(SSLContext.getDefault());
        } catch (NoSuchAlgorithmException e) {
//            Log.error("创建SSL连接失败",e.getMessage());
        }
        Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
                .register("https", sslsf)
                .register("http", new PlainConnectionSocketFactory())
                .build();
        cm = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
        cm.setMaxTotal(2000);
        cm.setDefaultMaxPerRoute(20);
    }

    private static CloseableHttpClient getHttpClient() {
        CloseableHttpClient httpClient = HttpClients.custom()
                .setConnectionManager(cm)
                .build();
        return httpClient;
    }

    public static String get(String url) {
        // 创建默认的httpClient实例
        CloseableHttpClient httpClient = HttpRequest.getHttpClient();
        CloseableHttpResponse httpResponse = null;
        // 发送get请求
        try {
            // 用get方法发送http请求
            HttpGet get = new HttpGet(url);
//            logger.info("执行get请求, uri: " + get.getURI());
            httpResponse = httpClient.execute(get);
            // response实体
            HttpEntity entity = httpResponse.getEntity();
            if (null != entity) {
                String response = EntityUtils.toString(entity);
                int statusCode = httpResponse.getStatusLine().getStatusCode();
//                logger.info("响应状态码:" + statusCode);
//                logger.info("响应内容:" + response);
                if (statusCode == HttpStatus.SC_OK) {
                    // 成功
                    return response;
                } else {
                    return null;
                }
            }
            return null;
        } catch (IOException e) {
//            Log.error("httpclient请求失败", e.getMessage());
            return null;
        } finally {
            if (httpResponse != null) {
                try {
                    EntityUtils.consume(httpResponse.getEntity());
                    httpResponse.close();
                } catch (IOException e) {
//                    Log.error("关闭response失败", e.getMessage());
                }
            }
        }
    }


    public static String post(String url,String data){
        CloseableHttpClient httpClient = HttpRequest.getHttpClient();
        CloseableHttpResponse httpResponse = null;
        String response = "";
        try{
            HttpPost httpPost = new HttpPost(url);
            httpPost.setHeader("Content-Type", "application/json");
            StringEntity stringentity = new StringEntity(data, ContentType.create("text/json", "UTF-8"));
            httpPost.setEntity(stringentity);
            httpResponse = httpClient.execute(httpPost);
            // response实体
            HttpEntity entity = httpResponse.getEntity();
            if (null != entity) {
                response = EntityUtils.toString(entity);
                int statusCode = httpResponse.getStatusLine().getStatusCode();
                if (statusCode != HttpStatus.SC_OK) {
//                    Log.info(url+ "\t"+statusCode+"\t"+data);
                    response = null;
                }
            }
        }catch (IOException e){
//            Log.error("访问出错",e.getMessage());
        }
        return  response;
    }

    public static String postContent(String url,String data){
        CloseableHttpClient httpClient = HttpRequest.getHttpClient();
        CloseableHttpResponse httpResponse = null;
        String response = "";
        try{
            HttpPost httpPost = new HttpPost(url);
            httpPost.setHeader("Content-Type", "application/x-www-form-urlencoded");
            StringEntity stringentity = new StringEntity(data, ContentType.create("text/json", "UTF-8"));
            httpPost.setEntity(stringentity);
            httpResponse = httpClient.execute(httpPost);
            // response实体
            HttpEntity entity = httpResponse.getEntity();
            if (null != entity) {
                response = EntityUtils.toString(entity);
                int statusCode = httpResponse.getStatusLine().getStatusCode();
                if (statusCode != HttpStatus.SC_OK) {
//                    Lo/g.info(url+ "\t"+statusCode+"\t"+data);
                    response = null;
                }
            }
        }catch (IOException e){
//            Log.error("访问出错",e.getMessage());
        }
        return  response;
    }
}
