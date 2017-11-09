package com.beef.domian.offer;

import com.beef.core.hibernate.HibernateBase;
import com.beef.domian.BaseHelper;

import javax.persistence.TypedQuery;
import java.util.ArrayList;
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
        String queryString = "SELECT o FROM Offer o WHERE " +
                "o.item.id = :itemId AND " +
                "(:startDate BETWEEN o.startDate AND o.endDate OR" +
                ":endDate BETWEEN o.startDate AND o.endDate OR " +
                "(:startDate <= o.startDate AND :endDate >= o.endDate))";

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
        String queryString = "select o from Offer o " +
                "where o.item.type = :searchType " +
                "AND :startDate BETWEEN o.startDate AND o.endDate " +
                "AND :endDate BETWEEN o.startDate AND o.endDate";
        List<String> words = new ArrayList<>(Arrays.asList(offerSearch.getTitle().split(" ")));

        queryString += words.stream()
                .reduce("", (acc, word) -> acc += String.format(" AND o.title LIKE :word_%s", word));

        queryString += " AND o.item.address.city LIKE :searchCity";

        if (offerSearch.getMaxPrice() > 0) {
            queryString += " AND o.price <= :searchMaxPrice";
        }

        if (offerSearch.getMaxPrice() == 0) {
            queryString += " AND o.price > :searchMaxPrice";
        }

        TypedQuery<Offer> query = HibernateBase.entityManager.createQuery(queryString, Offer.class);
        query.setParameter("searchType", offerSearch.getType());
        query.setParameter("startDate", offerSearch.getStartDate());
        query.setParameter("endDate", offerSearch.getEndDate());
        query.setParameter("searchCity", String.format("%%%s%%", offerSearch.getCity()));
        query.setParameter("searchMaxPrice", offerSearch.getMaxPrice());
        words.forEach(word -> query.setParameter("word_" + word, String.format("%%%s%%", word)));

        return OfferHelper.getOffersFromQueryWithClearedUsers(query);
    }
}
