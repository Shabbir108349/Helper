package com.example.chat.Scheduler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class EveryMinute {
    RestTemplate rest = new RestTemplate();

    @Scheduled(cron = "0 */1 * * * *") // every 2 minutes
    public void callApi() {
        String response = rest.getForObject("https://chat-app-l06s.onrender.com/check", String.class);
        System.out.println("API Response: " + response);
    }

}




