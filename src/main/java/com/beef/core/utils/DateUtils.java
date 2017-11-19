package com.beef.core.utils;

import java.util.Calendar;

public class DateUtils {

    public static long getCurrentTimestamp() {
        return Calendar.getInstance().getTimeInMillis();
    }
}
