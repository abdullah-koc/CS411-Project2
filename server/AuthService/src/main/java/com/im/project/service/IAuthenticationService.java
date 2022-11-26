package com.im.project.service;

import com.im.project.dto.UserDto;
import com.im.project.dto.UserLoginDto;
import com.im.project.dto.UserSignupDto;
import org.springframework.stereotype.Service;

@Service
public interface IAuthenticationService
{
    UserDto login (UserLoginDto userLoginDto);
    UserDto signUp (UserSignupDto userSignupDto);

}
