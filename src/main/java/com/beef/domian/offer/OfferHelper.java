package com.beef.domian.offer;

import com.beef.core.hibernate.HibernateBase;
import com.beef.domian.BaseHelper;

import javax.persistence.TypedQuery;
import java.util.Arrays;
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

    public static List<Offer> getAllActiveOffersByTimeAndItemId(long itemId, long startDate, long endDate) {
        String queryString = "select o from Offer o where " +
                "o.item.id = :itemId and " +
                "o.startDate <= :startDate and :startDate >= o.endDate or " +
                "o.startDate <= :endDate and :endDate >= o.endDate or " +
                ":startDate <= o.startDate and :endDate >= o.endDate";

        TypedQuery<Offer> query = HibernateBase.entityManager.createQuery(queryString, Offer.class);
        query.setParameter("itemId", itemId);
        query.setParameter("startDate", startDate);
        query.setParameter("endDate", endDate);

        return OfferHelper.getOffersFromQueryWithClearedUsers(query);
    }

    public static Offer getOfferById(long id) {
        return HibernateBase.entityManager.find(Offer.class, id);
    }

    public static List<Offer> search(OfferSearch offerSearch) {
        String queryString = "select o from Offer o where o.item.type = :search.type AND :search.date BETWEEN o.startDate AND o.endDate";
        if (offerSearch.getTitle().equals("")) {
            Arrays.stream(offerSearch.getTitle().split(" "))
                    .forEach(word -> String.format(" and o.item.title LIKE %%%s%%", word));
        }
        if (offerSearch.getCity().equals("")) {
            queryString += " AND o.item.address.city LIKE :search.city";
        }
        if (offerSearch.getMaxPrice() != 0) {
            queryString += " AND o.maxPrice >= :search.maxPrice";
        }

        TypedQuery<Offer> query = HibernateBase.entityManager.createQuery(queryString, Offer.class);
        query.setParameter("search", offerSearch);

        return OfferHelper.getOffersFromQueryWithClearedUsers(query);
    }
}
