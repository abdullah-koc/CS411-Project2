package com.im.project.service;

import com.im.project.converter.UserMapper;
import com.im.project.dao.UserDao;
import com.im.project.dto.UserLoginDto;
import com.im.project.dto.UserSignupDto;
import com.im.project.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService
{
    private final UserDao userDao;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User login(UserLoginDto userLoginDto)
    {
        User user = userDao.findByEmail(userLoginDto.getEmail());
        if(Objects.isNull(user))
        {
            throw new RuntimeException("This email is not registered.");
        }
        if(bCryptPasswordEncoder.matches(userLoginDto.getPassword(), user.getPassword()))
        {
            return user;
        }
        throw new RuntimeException("Wrong password.");
    }

    @Override
    public User signUp(UserSignupDto userSignupDto)
    {
        User existingUser = userDao.findByEmail(userSignupDto.getEmail());
        if(!Objects.isNull(existingUser))
        {
            throw new RuntimeException("This user already exists.");
        }
        User user = UserMapper.INSTANCE.convertToUser(userSignupDto);
        String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        userDao.save(user);
        return user;
    }

    @Override
    public User getUser(Long id)
    {
        return userDao.findById(id).orElseThrow();
    }


}
