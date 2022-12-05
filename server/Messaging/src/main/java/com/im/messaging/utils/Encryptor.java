package com.im.messaging.utils;

import java.util.ArrayList;
import java.util.List;

public class Encryptor
{
    public static String encrypt(String msg){
        char [] msgArr = msg.toCharArray();
        List<Character> arr = new ArrayList<>();
        for (char c : msgArr)
        {
            arr.add((char) ((c * 3) - 10));
        }

        StringBuilder builder = new StringBuilder(arr.size());
        for(Character ch: arr)
        {
            builder.append(ch);
        }
        return builder.toString();
    }

    public static String decrypt(String msg){
        char [] msgArr = msg.toCharArray();
        List<Character> arr = new ArrayList<>();
        for (char c : msgArr)
        {
            arr.add((char)((c + 10)/3));
        }

        StringBuilder builder = new StringBuilder(arr.size());
        for(Character ch: arr)
        {
            builder.append(ch);
        }
        return builder.toString();
    }

}
