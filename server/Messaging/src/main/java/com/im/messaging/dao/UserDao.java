package com.im.messaging.dao;

import com.im.messaging.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Long>
{
}
