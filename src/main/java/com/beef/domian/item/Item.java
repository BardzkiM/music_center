package com.beef.domian.item;

import com.beef.domian.address.Address;
import com.beef.domian.user.User;

import javax.persistence.*;
import java.util.List;

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

    @ElementCollection
    private List<String> images;

    private String name;

    private ItemType type;

    private boolean active;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "addressId")
    private Address address;

    public void updateData(Item item) {
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

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ItemType getType() {
        return type;
    }

    public void setType(ItemType type) {
        this.type = type;
    }

    public boolean getActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
