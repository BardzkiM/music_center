package com.beef.core.utils;

import java.util.Random;

public class Utils {
    public static final String sessionUserName = "sessionUser";
    public static int getRandomInt() {
        Random generator = new Random();
        return generator.nextInt(1000000000) + 1;
    }
}
