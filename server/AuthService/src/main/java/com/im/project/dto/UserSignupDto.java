package com.im.project.dto;

import lombok.Data;

@Data
public class UserSignupDto
{
    private String name;
    private String surname;
    private String email;
    private String password;
    private String photo;
}
