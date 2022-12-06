package com.im.messaging.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "MESSAGES")
@Getter
@Setter
@ToString
public class Message
{
    @Id
    @SequenceGenerator(name = "Message", sequenceName = "MESSAGES_ID_SEQ")
    @GeneratedValue(generator = "Message")
    private Long id;

    @ManyToOne
    private User sender;

    @ManyToOne
    private User receiver;

    @Column(name = "MESSAGE")
    private String message;

    @Column(name = "MESSAGE_DATE")
    private LocalDateTime messageDate;

    private MessageStatus status;
}
