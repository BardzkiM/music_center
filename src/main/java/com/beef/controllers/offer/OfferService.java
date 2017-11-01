package com.beef.controllers.offer;

import com.beef.core.hibernate.HibernateBase;
import com.beef.core.utils.UserUtils;
import com.beef.domian.offer.Offer;
import com.beef.domian.offer.OfferHelper;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

class OfferService {

    static Offer addOffer(HttpSession session,
                        HttpServletRequest request,
                        String data)
            throws IOException {
        HibernateBase.closeEntityManagers();

        Offer offer = new ObjectMapper().readValue(data, Offer.class);


        OfferHelper.createOffer(offer);

        return offer;
    }

    protected static List<Offer> getAllOffers(HttpSession session) {
        HibernateBase.closeEntityManagers();

        if (UserUtils.isUserAuthenticated(session)) {
            return OfferHelper.getAllOffers();
        }

        return null;
    }

    protected static List<Offer> getAllActiveOffers(HttpSession session) {
        HibernateBase.closeEntityManagers();

        if (UserUtils.isUserAuthenticated(session)) {
            return OfferHelper.getAllActiveOffers();
        }

        return null;
    }


    protected static Offer getOfferById(HttpSession session, String offerId) {
        HibernateBase.closeEntityManagers();

        if (UserUtils.isUserAuthenticated(session)) {
            return OfferHelper.getOfferById(Long.parseLong(offerId));
        }

        return null;
    }
}
