package com.beef.domian.offer;

import com.beef.core.hibernate.HibernateBase;
import com.beef.core.utils.DateUtils;
import com.beef.core.utils.MathUtils;
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

        return getOffersFromQueryWithClearedUsers(query);
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

        return getOffersFromQueryWithClearedUsers(query);
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

        return getOffersFromQueryWithClearedUsers(query);
    }

    public static Boolean getOfferAvailability(long offerId, long startDate, long endDate) {
        Offer offer = getOfferById(offerId);
        return MathUtils.areBetween(offer.getStartDate(), offer.getEndDate(), startDate, endDate);
    }

    public static List<Offer> getAllOffersByUserId(long userId) {
        String queryString = "select o from Offer o where o.item.user.id = :userId";
        return getOffersByUserId(queryString, userId);
    }

    public static List<Offer> getActiveOffersByUserId(long userId) {
        String queryString =
                String.format("select o from Offer o where o.item.user.id =:userId " +
                        "AND o.endDate < %d", DateUtils.getCurrentTimestamp());

        return getOffersByUserId(queryString, userId);
    }

    private static List<Offer> getOffersByUserId(String queryString, long userId) {
        TypedQuery<Offer> query = HibernateBase.entityManager.createQuery(queryString, Offer.class);
        query.setParameter("userId", userId);

        return getOffersFromQueryWithClearedUsers(query);
    }
}
