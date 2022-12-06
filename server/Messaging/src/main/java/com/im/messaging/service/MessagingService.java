package com.im.messaging.service;

import com.im.messaging.dao.MessageDao;
import com.im.messaging.entity.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessagingService implements ImessagingService
{

    private final MessageDao messageDao;

    @Override
    public List<Message> getMessages(Long senderId, Long receiverId)
    {
        return messageDao.findAllBySenderAndReceiver(senderId, receiverId);
    }
}
