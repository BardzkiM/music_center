package com.beef.core.utils;

import com.beef.domian.user.User;

import javax.servlet.http.HttpSession;

public class UserUtils {

    public static boolean isUserAuthenticated(HttpSession session) {
        return getSessionUser(session) != null;
    }

    public static boolean isUserAdmin(HttpSession session) {
        User authenticatedUser = getSessionUser(session);

        return authenticatedUser != null && authenticatedUser.getLogin().equals("admin");
    }

    public static User getSessionUser(HttpSession session) {
        return (User) session.getAttribute(Utils.sessionUserName);
    }

}
