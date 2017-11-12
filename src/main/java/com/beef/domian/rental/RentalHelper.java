package com.beef.domian.rental;

import com.beef.domian.BaseHelper;

public class RentalHelper extends BaseHelper {

    public static void createRental(Rental rental) {
        persist(rental.getDeliveryAddress());
        persist(rental);
    }
}
