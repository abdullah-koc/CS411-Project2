package com.im.project.controller;

import com.im.project.dto.UserDto;
import com.im.project.dto.UserLoginDto;
import com.im.project.dto.UserSignupDto;
import com.im.project.service.IAuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth/")
@RequiredArgsConstructor
public class AuthenticationController
{
    private final IAuthenticationService authenticationService;

    @PostMapping("signUp")
    public ResponseEntity<UserDto> signUp(@RequestBody UserSignupDto userSignupDto)
    {
        return ResponseEntity.ok(authenticationService.signUp(userSignupDto));
    }

    @PostMapping("login")
    public ResponseEntity<UserDto> login(@RequestBody UserLoginDto userLoginDto)
    {
        return ResponseEntity.ok(authenticationService.login(userLoginDto));
    }
}
