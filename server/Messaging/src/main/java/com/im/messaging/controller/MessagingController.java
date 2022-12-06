package com.im.messaging.controller;

import com.im.messaging.dao.MessageDao;
import com.im.messaging.entity.Message;
import com.im.messaging.utils.Encryptor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class MessagingController {

    private final SimpMessagingTemplate simpMessagingTemplate;

    private final MessageDao messageDao;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message receiveMessage(@Payload Message message){
        return message;
    }

    @MessageMapping("/private-message")
    public Message recMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getReceiver().getId().toString(),"/private",message);
        messageDao.save(message);
        return message;
    }
}
