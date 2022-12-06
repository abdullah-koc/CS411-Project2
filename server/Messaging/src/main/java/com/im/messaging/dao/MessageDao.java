package com.im.messaging.dao;

import com.im.messaging.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MessageDao extends JpaRepository<Message, Long>
{
    @Query("select m from Message m where m.sender.id = :senderId and m.receiver.id = :receiverId")
    List<Message> findAllBySenderAndReceiver(Long senderId, Long receiverId);
}
