package com.beef.domian.offer;

import com.beef.domian.item.ItemType;

public class OfferSearch {

    private ItemType type;

    private String title;

    private float maxPrice;

    private String city;

    private long date;

    public OfferSearch(ItemType type, String title, float maxPrice, String city, long date) {
        this.type = type;
        this.title = title;
        this.maxPrice = maxPrice;
        this.city = city;
        this.date = date;
    }

    public ItemType getType() {
        return type;
    }

    public void setType(ItemType type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public float getMaxPrice() {
        return maxPrice;
    }

    public void setMaxPrice(float maxPrice) {
        this.maxPrice = maxPrice;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public long getDate() {
        return date;
    }

    public void setDate(long date) {
        this.date = date;
    }
}
