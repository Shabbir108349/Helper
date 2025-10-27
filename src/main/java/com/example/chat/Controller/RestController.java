package com.example.chat.Controller;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {
    @GetMapping("/check")
    public String check(){
        return "OK";
    }
}
