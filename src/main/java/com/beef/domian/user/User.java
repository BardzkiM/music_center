package com.beef.domian.user;

import com.beef.domian.address.Address;

import javax.persistence.*;

@Entity
public class User {

    public User() {
    }

    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public User(User user) {
        this.updateData(user);
        password = "";
        active = user.active;
    }

    @Id
    @GeneratedValue
    private long id;

    private String login;

    private String password;

    private String firstName;

    private String lastName;

    @OneToOne
    @JoinColumn(name = "addressId")
    private Address address;

    private String email;

    private boolean active;

    @Column(columnDefinition = "text")
    private String description;

    public void updateData(User user) {
        login = user.login;
        password = user.password;
        firstName = user.firstName;
        lastName = user.lastName;
        address = user.address;
        email = user.email;
        description = user.description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void clearUser() {
        this.password = "";
    }

    public void setAddressId(long addressId) {
        this.address.setId(addressId);
    }
}
