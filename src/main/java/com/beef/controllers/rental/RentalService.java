package com.beef.controllers.rental;

import com.beef.core.hibernate.HibernateBase;
import com.beef.core.utils.UserUtils;
import com.beef.domian.address.Address;
import com.beef.domian.address.AddressHelper;
import com.beef.domian.offer.Offer;
import com.beef.domian.offer.OfferHelper;
import com.beef.domian.rental.Rental;
import com.beef.domian.rental.RentalHelper;
import com.beef.domian.rental.RentalStatus;
import com.beef.domian.user.User;
import com.beef.domian.user.UserHelper;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

class RentalService {

    static Rental addRental(HttpSession session,
                            String data,
                            long offerId,
                            boolean useUserAddress) throws IOException {

        if (UserUtils.isUserAuthenticated(session)) {
            HibernateBase.closeEntityManagers();
            Rental rental = new ObjectMapper().readValue(data, Rental.class);

            if (!RentalHelper.getRentalAvailability(offerId, rental.getStartDate(), rental.getEndDate())) {
                return null;
            }

            User sessionUser = UserUtils.getSessionUser(session);

            rental.setUser(sessionUser);
            rental.setStatus(RentalStatus.ACTIVE);

            if (useUserAddress) {
                rental.setDeliveryAddress(new Address(sessionUser.getAddress()));
            }
            AddressHelper.createAddress(rental.getDeliveryAddress());

            Offer offer =  OfferHelper.getOfferById(offerId);
            rental.setOffer(offer);

            RentalHelper.createRental(rental);

            return rental;
        }

        return null;
    }

    static List<Rental> getAllRentalsByOfferId(long offerId) throws IOException {
        HibernateBase.closeEntityManagers();
        return RentalHelper.getAllRentalsByOfferId(offerId);
    }

    static List<Rental> getAllUserRentals(HttpSession session) {
        if (UserUtils.isUserAuthenticated(session)) {
            User sessionUser = UserUtils.getSessionUser(session);
            return RentalHelper.getAllUserRentals(sessionUser.getId());
        }
        return null;
    }
}
