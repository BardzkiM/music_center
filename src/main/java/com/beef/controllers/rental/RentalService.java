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

            if (useUserAddress || rental.getDeliveryAddress() == null) {
                rental.setDeliveryAddress(new Address(sessionUser.getAddress()));
            }
            Offer offer = OfferHelper.getOfferById(offerId);
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

    static Rental deactivateRentalById(HttpSession session,
                                       long id) throws IOException {
        if (UserUtils.isUserAuthenticated(session)) {
            HibernateBase.closeEntityManagers();

            Rental rental = RentalHelper.getRentalById(id);

            User sessionUser = UserUtils.getSessionUser(session);

            if(sessionUser.getId() == rental.getUser().getId()) {
                return RentalHelper.deactivateRental(rental);
            }
        }

        return null;
    }
}
