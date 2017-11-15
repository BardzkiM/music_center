package com.beef.core.utils;

public class MathUtils {
    public static Boolean isBetween(long a, long min, long max) {
        return a >= min && a <= max;
    }

    public static Boolean areBetween(long a, long b, long min, long max) {
        return MathUtils.isBetween(a, min, max) && MathUtils.isBetween(b, min, max);
    }
}
