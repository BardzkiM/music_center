package com.beef.domian.address;

import com.beef.domian.BaseHelper;

import javax.persistence.TypedQuery;

public class AddressHelper extends BaseHelper {

    public static void createAddress(Address address) {
        persist(address);
    }

}
