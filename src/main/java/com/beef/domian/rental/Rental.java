package com.beef.domian.rental;

import com.beef.domian.offer.Offer;
import com.beef.domian.user.User;

import java.util.Date;

import javax.persistence.*;

@Entity
public class Rental {

    public Rental() {
    }

    public Rental(Rental rental) {
        this.updateData(rental);
    }

    @Id
    @GeneratedValue
    private long id;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date endDate;

    private String deliveryAddress;

    private String status;

    @OneToMany
    @JoinColumn(name = "offerId")
    private Offer offer;

    @OneToMany
    @JoinColumn(name = "userId")
    private User user;

    public void updateData(Rental rental) {
        startDate = rental.startDate;
        endDate = rental.endDate;
        deliveryAddress = rental.deliveryAddress;
        status = rental.status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Offer getOffer() {
        return offer;
    }

    public void setOffer(Offer offer) {
        this.offer = offer;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
