package com.beef.domian.address;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Address {

    public Address() {

    }

    public Address(
            String city,
            String street,
            short houseNumber,
            short apartmentNumber,
            String zipCode) {
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.apartmentNumber = apartmentNumber;
        this.zipCode = zipCode;
    }

    public Address(Address address) {
        city = address.city;
        street = address.street;
        houseNumber = address.houseNumber;
        apartmentNumber = address.apartmentNumber;
        zipCode = address.zipCode;
    }

    @Id
    @GeneratedValue
    private long id;

    private String city;

    private String street;

    private short houseNumber;

    private short apartmentNumber;

    private String zipCode;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public short getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(short houseNumber) {
        this.houseNumber = houseNumber;
    }

    public short getApartmentNumber() {
        return apartmentNumber;
    }

    public void setApartmentNumber(short apartmentNumber) {
        this.apartmentNumber = apartmentNumber;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }
}
