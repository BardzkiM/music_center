package com.beef.domian.item;

import com.beef.domian.user.User;

import javax.persistence.*;

@Entity
public class Item {

    public Item() {
    }

    public Item(Item item) {
        this.updateData(item);
    }

    @Id
    @GeneratedValue
    private long id;

    private String address;

    private String images;

    private String name;

    private String type;

    private String active;

    @OneToMany
    @JoinColumn(name = "userId")
    private User user;

    public void updateData(Item item) {
        address = item.address;
        images = item.images;
        name = item.name;
        type = item.type;
        active = item.active;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
