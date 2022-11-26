package com.im.project.converter;

import com.im.project.dto.UserDto;
import com.im.project.dto.UserSignupDto;
import com.im.project.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper
{
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User convertToUser(UserSignupDto userSignupDto);
    UserDto convertToUserDto(User user);
}
