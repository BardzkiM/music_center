package com.beef.domian.rental;

import com.beef.domian.address.Address;
import com.beef.domian.offer.Offer;
import com.beef.domian.user.User;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Rental {

    public Rental() {
    }

    @Id
    @GeneratedValue
    private long id;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date endDate;

    @OneToOne
    @JoinColumn(name = "addressId")
    private Address deliveryAddress;

    private RentalStatus status;

    @ManyToOne
    @JoinColumn(name = "offerId")
    private Offer offer;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

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

    public Address getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(Address deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public RentalStatus getStatus() {
        return status;
    }

    public void setStatus(RentalStatus status) {
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
