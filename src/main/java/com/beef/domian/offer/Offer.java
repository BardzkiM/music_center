package com.beef.domian.offer;

import com.beef.domian.item.Item;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Offer {

    public Offer() {
    }

    public Offer(Offer offer) {
        this.updateData(offer);
    }

    @Id
    @GeneratedValue
    private long id;

    private float price;

    private long startDate;

    private long endDate;

    private float deliveryMaxDistance;

    private float deliveryPrice;

    private String title;

    @Column(columnDefinition = "text")
    private String description;

    @ManyToOne
    @JoinColumn(name = "itemId")
    private Item item;

    public void updateData(Offer offer) {
        price = offer.price;
        startDate = offer.startDate;
        endDate = offer.endDate;
        deliveryMaxDistance = offer.deliveryMaxDistance;
        deliveryPrice = offer.deliveryPrice;
        title = offer.title;
        description = offer.description;
        item = offer.item;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public long getStartDate() {
        return startDate;
    }

    public void setStartDate(long startDate) {
        this.startDate = startDate;
    }

    public long getEndDate() {
        return endDate;
    }

    public void setEndDate(long endDate) {
        this.endDate = endDate;
    }

    public float getDeliveryMaxDistance() {
        return deliveryMaxDistance;
    }

    public void setDeliveryMaxDistance(float deliveryMaxDistance) {
        this.deliveryMaxDistance = deliveryMaxDistance;
    }

    public float getDeliveryPrice() {
        return deliveryPrice;
    }

    public void setDeliveryPrice(float deliveryPrice) {
        this.deliveryPrice = deliveryPrice;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public void clearUser() {
        this.item.clearUser();
    }
}
