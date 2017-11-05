package com.beef.controllers.user;

import com.beef.controllers.authentication.AuthenticationService;
import com.beef.domian.user.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @PostMapping("/register")
    public boolean register(@RequestParam("data") String userData) throws IOException {
        User user = new ObjectMapper().readValue(userData, User.class);

        return AuthenticationService.register(user);
    }

    @PostMapping("/update")
    public User updateUser(HttpSession session, @RequestParam("data") String userData) throws IOException {
        User user = new ObjectMapper().readValue(userData, User.class);

        return UserService.updateUser(session, user);
    }

    @GetMapping("/all")
    public List<User> getUsers(HttpSession session) {
        return UserService.getUsers(session);
    }

    @PostMapping("/deactivate")
    public void deactivateUser(HttpSession session, @RequestParam("userId") String id) throws IOException {
        UserService.changeUserStatus(session, id, false);
    }

    @PostMapping("/activate")
    public void activateUser(HttpSession session, @RequestParam("userId") String id) throws IOException {
        UserService.changeUserStatus(session, id, true);
    }

    @GetMapping("/{id}")
    public @ResponseBody User getUserById(HttpSession session, @PathVariable(value="id") String id) {
        return UserService.getUserById(session, id);
    }

    @PostMapping("/updateByAdmin")
    public User updateUserByAdmin(HttpSession session,
                                  @RequestParam("data") String userData,
                                  @RequestParam("userId") String userId) throws IOException {
        User user = new ObjectMapper().readValue(userData, User.class);
        user.setId(Long.parseLong(userId));
        return UserService.updateUserByAdmin(session, user);
    }
}
