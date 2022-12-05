package com.im.messaging.dao;

import com.im.messaging.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageDao extends JpaRepository<Message, Long>
{
}
