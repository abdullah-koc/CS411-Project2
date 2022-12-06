package com.im.messaging.service;

import com.im.messaging.entity.Message;

import java.util.List;

public interface ImessagingService
{
    List<Message> getMessages(Long senderId, Long receiverId);
}
