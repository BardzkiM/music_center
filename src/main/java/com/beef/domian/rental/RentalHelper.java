package com.beef.domian.rental;

import com.beef.core.hibernate.HibernateBase;
import com.beef.core.utils.MathUtils;
import com.beef.domian.BaseHelper;
import com.beef.domian.offer.Offer;
import com.beef.domian.offer.OfferHelper;

import javax.persistence.TypedQuery;
import java.util.Date;
import java.util.List;

public class RentalHelper extends BaseHelper {

    public static List<Rental> getOffersFromQueryWithClearedUsers(TypedQuery<Rental> query) {
        try {
            List<Rental> rentals = query.getResultList();
            rentals.forEach(Rental::clearUser);

            return rentals.size() > 0 ? rentals: null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void createRental(Rental rental) {
        persist(rental.getDeliveryAddress());
        persist(rental);
    }

    public static List<Rental> getAllRentalsByOfferId(long offerId) {
        String queryString = "SELECT r FROM Rental r WHERE " +
                "r.offer.id = :offerId AND r.status = :activeStatus";

        TypedQuery<Rental> query = HibernateBase.entityManager.createQuery(queryString, Rental.class);
        query.setParameter("offerId", offerId);
        query.setParameter("activeStatus", RentalStatus.ACTIVE);

        return RentalHelper.getOffersFromQueryWithClearedUsers(query);
    }

    public static Boolean getRentalAvailability(long offerId, long startDate, long endDate) {
        List<Rental> rentals = RentalHelper.getAllRentalsByOfferId(offerId);
        Offer offer = OfferHelper.getOfferById(offerId);

        if (!OfferHelper.getOfferAvailability(offerId, startDate, endDate)) {
            return false;
        }

        if (offer.getStartDate() == startDate && offer.getEndDate() == endDate && rentals.size() > 0) {
            return false;
        }
        if (rentals == null) {
            return true;
        }
        for (Rental rental : rentals) {
            if (MathUtils.areBetween(startDate, endDate, rental.getStartDate(), rental.getEndDate())) {
                return false;
            }
        }

        return true;
    }

    public static List<Rental> getAllUserRentals(long userId) {
        String queryString = "select r from Rental r where r.user.id = :userId";
        TypedQuery<Rental> query = HibernateBase.entityManager.createQuery(queryString, Rental.class);
        query.setParameter("userId", userId);

        return RentalHelper.getOffersFromQueryWithClearedUsers(query);
    }

    public static Rental getRentalById(long id) {
        return HibernateBase.entityManager.find(Rental.class, id);
    }

    public static Rental deactivateRental(Rental rental) {
        HibernateBase.entityManager.getTransaction().begin();
        rental.deactivate();
        HibernateBase.entityManager.persist(rental);
        HibernateBase.entityManager.getTransaction().commit();
        return rental;
    }
}
