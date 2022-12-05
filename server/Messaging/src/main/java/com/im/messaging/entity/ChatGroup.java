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
@Table(name = "CHATGROUPS")
@Getter
@Setter
public class ChatGroup
{
    @Id
    @SequenceGenerator(name = "ChatGroup", sequenceName = "CHATGROUPS_ID_SEQ")
    @GeneratedValue(generator = "ChatGroup")
    private Long id;

    @Column(name = "GROUP_NAME")
    private String name;

    @Column(name = "GROUP_PHOTO")
    private String photo;

    @ManyToMany(mappedBy = "userChatGroups")
    Set<User> groupUsers;


}
