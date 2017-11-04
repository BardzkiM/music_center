package com.beef.controllers.authentication;

import com.beef.domian.user.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.IOException;

@RestController
@RequestMapping("/user")
public class AuthenticationController {

    @PostMapping("/login")
    public User login(HttpSession session, @RequestParam("data") String userData) throws IOException {
        User user = new ObjectMapper().readValue(userData, User.class);

        return AuthenticationService.login(session, user);
    }

    @GetMapping("/logged")
    public User getLoggedUser(HttpSession session) {
        return AuthenticationService.getLoggedUser(session);
    }

    @PostMapping("/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }
}
