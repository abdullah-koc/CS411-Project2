package com.im.messaging.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "MESSAGES")
@Getter
@Setter
public class Message
{
    @Id
    @SequenceGenerator(name = "Message", sequenceName = "MESSAGES_ID_SEQ")
    @GeneratedValue(generator = "Message")
    private Long id;

    @ManyToOne
    private User sender;

    @ManyToOne
    private ChatGroup chatGroup;

    @Column(name = "MESSAGE")
    private String message;

    @Column(name = "MESSAGE_DATE")
    private LocalDateTime messageDate;
}
