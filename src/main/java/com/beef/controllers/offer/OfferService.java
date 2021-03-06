package com.beef.controllers.offer;

import com.beef.controllers.authentication.AuthenticationController;
import com.beef.core.hibernate.HibernateBase;
import com.beef.core.utils.UserUtils;
import com.beef.domian.offer.Offer;
import com.beef.domian.offer.OfferHelper;
import com.beef.domian.offer.OfferSearch;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

class OfferService {

    static Offer addOffer(HttpSession session, String data) throws IOException {

        if (UserUtils.isUserAuthenticated(session)) {
            HibernateBase.closeEntityManagers();

            Offer offer = new ObjectMapper().readValue(data, Offer.class);
            long itemId = offer.getItem().getId();
            List<Offer> activeOffersWithItem =
                    OfferHelper.getAllActiveOffersByTimeAndItemId(
                            itemId, offer.getStartDate(), offer.getEndDate());

            if (activeOffersWithItem == null || activeOffersWithItem.size() == 0) {
                OfferHelper.createOffer(offer);
                return offer;
            }
        }

        return null;
    }

    static List<Offer> getAllOffers(HttpSession session) {
        HibernateBase.closeEntityManagers();

        if (UserUtils.isUserAuthenticated(session)) {
            return OfferHelper.getAllOffers();
        }

        return null;
    }

    static List<Offer> getAllActiveOffers(HttpSession session) {
        HibernateBase.closeEntityManagers();

        if (UserUtils.isUserAuthenticated(session)) {
            return OfferHelper.getAllActiveOffers();
        }

        return null;
    }

    static Offer getOfferById(String offerId) {
        HibernateBase.closeEntityManagers();

        return OfferHelper.getOfferById(Long.parseLong(offerId));
    }

    protected static List<Offer> search(HttpSession session, String data) throws IOException {
        HibernateBase.closeEntityManagers();
        OfferSearch offerSearch = new ObjectMapper().readValue(data, OfferSearch.class);

        return OfferHelper.search(offerSearch);
    }

    static List<Offer> getOffersByUserId(HttpSession session, String userId) {
        if (UserUtils.isUserAuthenticated(session)) {
            return OfferHelper.getAllOffersByUserId(Long.parseLong(userId));
        }
        return null;
    }

    static List<Offer> getActiveOffersByUserId(HttpSession session, String userId) {
        if (UserUtils.isUserAuthenticated(session)) {
            return OfferHelper.getActiveOffersByUserId(Long.parseLong(userId));
        }
        return null;
    }
}
