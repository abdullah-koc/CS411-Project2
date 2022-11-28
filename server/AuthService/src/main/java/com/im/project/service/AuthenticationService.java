package com.im.project.service;

import com.im.project.converter.UserMapper;
import com.im.project.dao.UserDao;
import com.im.project.dto.UserDto;
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
    public UserDto login(UserLoginDto userLoginDto)
    {
        User user = userDao.findByEmail(userLoginDto.getEmail());
        if(Objects.isNull(user))
        {
            throw new RuntimeException("This email is not registered.");
        }
        if(bCryptPasswordEncoder.matches(userLoginDto.getPassword(), user.getPassword()))
        {
            return UserMapper.INSTANCE.convertToUserDto(user);
        }
        return null;
    }

    @Override
    public UserDto signUp(UserSignupDto userSignupDto)
    {
        User existingUser = userDao.findByEmail(userSignupDto.getEmail());
        if(!Objects.isNull(existingUser))
        {
            throw new RuntimeException("This user already exists.");
        }
        User user = UserMapper.INSTANCE.convertToUser(userSignupDto);
        String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);
        return UserMapper.INSTANCE.convertToUserDto(userDao.save(user));
    }


}
