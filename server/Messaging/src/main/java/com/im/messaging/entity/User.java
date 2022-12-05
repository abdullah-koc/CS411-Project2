package com.im.messaging.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "USERS")
@Getter
@Setter
public class User
{
    @Id
    @SequenceGenerator(name = "User", sequenceName = "USERS_ID_SEQ")
    @GeneratedValue(generator = "User")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "SURNAME")
    private String surname;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "PHOTO")
    private String photo;

    @ManyToMany
    @JoinTable(
            name = "user_group",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "chatgroup_id"))
    Set<ChatGroup> userChatGroups;
}
