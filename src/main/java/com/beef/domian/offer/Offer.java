package com.beef.domian.offer;

import com.beef.domian.item.Item;

import java.util.Date;

import javax.persistence.*;

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

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date endDate;

    private float deliveryArea;

    private float deliveryPrice;

    private String title;

    @Column(columnDefinition="text")
    private String description;

    @OneToMany
    @JoinColumn(name = "itemId")
    private Item item;

    public void updateData(Offer offer) {
        price = offer.price;
        startDate = offer.startDate;
        endDate = offer.endDate;
        deliveryArea = offer.deliveryArea;
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public float getDeliveryArea() {
        return deliveryArea;
    }

    public void setDeliveryArea(float deliveryArea) {
        this.deliveryArea = deliveryArea;
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
}
