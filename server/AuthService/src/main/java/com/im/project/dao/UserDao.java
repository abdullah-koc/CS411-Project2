package com.im.project.dao;

import com.im.project.dto.UserDto;
import com.im.project.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Long>
{
    User findByEmail(String email);
}
