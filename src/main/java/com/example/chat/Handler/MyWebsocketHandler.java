package com.example.chat.Handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.*;

@Slf4j
public class MyWebsocketHandler extends TextWebSocketHandler {
    private final Set<WebSocketSession> sessions = Collections.synchronizedSet(new HashSet<>());
    private final Map<String,String> users = Collections.synchronizedMap(new HashMap<>());
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
        log.info(session.getId() +" is joined");
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        if(!users.containsKey(session.getId())){
            users.put(session.getId(),message.getPayload().toString().trim());
            session.sendMessage(new TextMessage("Welcome "+message.getPayload()+"!"));
        }else{
            synchronized (sessions){
                for (WebSocketSession e: sessions){
                    if(e.isOpen() && !e.getId().equals(session.getId())){
                        e.sendMessage(new TextMessage(users.get(session.getId()) + " : " + message.getPayload()));
                    }
                }
            }
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        log.info(users.get(session.getId())+" is removed!");
        synchronized (sessions){
            for(WebSocketSession e: sessions){
                if(e.isOpen() && !e.getId().equals(session.getId())){
                    e.sendMessage(new TextMessage(users.get(session.getId())+ " is left!"));
                }
            }
        }
        users.remove(session.getId());
        sessions.remove(session);
    }
}
