package com.lijie;

import com.lijie.dao.redis.RedisFactory;
import com.lijie.dao.redis.TaskRedis;
import com.lijie.model.DownloadData;
import com.lijie.util2.HttpClientHelper;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;

public class TencentVideoDownload {
    ThreadPoolExecutor executor = new ThreadPoolExecutor(5, 5, 0, TimeUnit.MILLISECONDS,
            new ArrayBlockingQueue<Runnable>(100));


    public static void main(String[] args) {
        TencentVideoDownload tencentVideoDownload = new TencentVideoDownload();
        tencentVideoDownload.start();
    }

    private void start() {
        TaskRedis taskRedis = new TaskRedis();
        RedisFactory.initAllInstance(ClassLoader.getSystemClassLoader().getResource("redis.properties").getPath());
        List<FutureTask<Boolean>> futureTasks = new ArrayList<>();
        while (true) {
            try {
                if (executor.getQueue().size() < 6) {
                    DownloadData data = taskRedis.getTaskInfo("pmop_downService_qqpage_test");
                    //队列中没有数据
                    if (data == null) {
                        Thread.sleep(5000);
                        continue;
                    }
                    FutureTask<Boolean> futureTask = new FutureTask<Boolean>(new TaskDownload(data.getSourceUrl(), data.getLocalUrl(), HttpClientHelper.createHttpClient()));
                    futureTasks.add(futureTask);
                    if (futureTasks.size() % 50 == 0) {
                        int success = (int) futureTasks.stream().filter(m -> {
                            try {
                                return m.get();
                            } catch (InterruptedException e) {
                                e.printStackTrace();
                            } catch (ExecutionException e) {
                                e.printStackTrace();
                            }
                            return false;
                        }).count();
                        System.out.println("处理完 100 条数据：成功：" + success);
                        futureTasks.clear();
                    }
                    executor.submit(futureTask);
                } else {
                    Thread.sleep(1000 * 5);
                }
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println("MultiMainDown.startThread,waiting 5s" + e.toString());
                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e1) {
                    e1.printStackTrace();
                }
            }
        }
    }

}
