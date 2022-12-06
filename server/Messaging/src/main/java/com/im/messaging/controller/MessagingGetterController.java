package com.im.messaging.controller;

import com.im.messaging.entity.Message;
import com.im.messaging.service.ImessagingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("messaging/get")
@RequiredArgsConstructor
public class MessagingGetterController
{
    private final ImessagingService messagingService;

    @GetMapping("/{senderId}/{receiverId}")
    public ResponseEntity<List<Message>> getMessages(@PathVariable Long senderId,@PathVariable Long receiverId){
        return ResponseEntity.ok(messagingService.getMessages(senderId, receiverId));
    }
}
