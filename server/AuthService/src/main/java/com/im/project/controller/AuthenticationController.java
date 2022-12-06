package com.im.project.controller;

import com.im.project.dto.UserLoginDto;
import com.im.project.dto.UserSignupDto;
import com.im.project.entity.User;
import com.im.project.service.IAuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth/")
@RequiredArgsConstructor
public class AuthenticationController
{
    private final IAuthenticationService authenticationService;

    @PostMapping("signUp")
    public ResponseEntity<User> signUp(@RequestBody UserSignupDto userSignupDto)
    {
        return ResponseEntity.ok(authenticationService.signUp(userSignupDto));
    }

    @PostMapping("login")
    public ResponseEntity<User> login(@RequestBody UserLoginDto userLoginDto)
    {
        return ResponseEntity.ok(authenticationService.login(userLoginDto));
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id){
        return ResponseEntity.ok(authenticationService.getUser(id));
    }
}
