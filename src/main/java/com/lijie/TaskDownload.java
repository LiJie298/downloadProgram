package com.lijie;

import com.lijie.util.TengxunVideoUtil;
import com.lijie.util2.HttpClientHelper;
import org.apache.http.impl.client.CloseableHttpClient;

import java.io.IOException;
import java.util.concurrent.Callable;

public class TaskDownload implements Callable<Boolean> {

    private String url;
    private String title;
    private CloseableHttpClient closeableHttpClient;

    public TaskDownload(String url, String title, CloseableHttpClient closeableHttpClient) {
        this.url = url;
        this.title = title;
        this.closeableHttpClient = closeableHttpClient;
    }

    private boolean download() {
        String realUrl = TengxunVideoUtil.getTecentRealURL(url);
        try {
            return HttpClientHelper.executeDownloadFile(closeableHttpClient, realUrl, title, "", true);
        } catch (IOException e) {
            System.out.println("title: " + url + "  下载失败 url:" + realUrl);
            return false;
        }
    }

    @Override
    public Boolean call() throws Exception {
        return download();
    }
}
