package com.im.project.service;

import com.im.project.dto.UserLoginDto;
import com.im.project.dto.UserSignupDto;
import com.im.project.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface IAuthenticationService
{
    User login (UserLoginDto userLoginDto);
    User signUp (UserSignupDto userSignupDto);

    User getUser(Long id);

}
