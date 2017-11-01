package com.beef.domian.offer;

import com.beef.core.hibernate.HibernateBase;
import com.beef.domian.BaseHelper;

import javax.persistence.TypedQuery;
import java.util.Calendar;
import java.util.List;

public class OfferHelper extends BaseHelper {

    public static void createOffer(Offer offer) {
        persist(offer);
    }

    public static List<Offer> getOffersFromQueryWithClearedUsers(TypedQuery<Offer> query) {
        try {
            List<Offer> offers = query.getResultList();
            offers.forEach(Offer::clearUser);
            return offers;
        } catch (Exception e) {
            return null;
        }
    }

    public static List<Offer> getAllOffers() {
        String queryString = "select o from Offer o";
        TypedQuery<Offer> query = HibernateBase.entityManager.createQuery(queryString, Offer.class);

        return OfferHelper.getOffersFromQueryWithClearedUsers(query);
    }

    public static List<Offer> getAllActiveOffers() {
        long currentDate = Calendar.getInstance().getTimeInMillis();
        String queryString = "select o from Offer o where o.startDate <= :currentDate and o.endDate >= :currentDate";
        TypedQuery<Offer> query = HibernateBase.entityManager.createQuery(queryString, Offer.class);
        query.setParameter("currentDate", currentDate);

        return OfferHelper.getOffersFromQueryWithClearedUsers(query);
    }

    public static Offer getOfferById(long id) {
        return HibernateBase.entityManager.find(Offer.class, id);
    }
}