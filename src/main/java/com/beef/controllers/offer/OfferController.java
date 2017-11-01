package com.beef.controllers.offer;

import com.beef.domian.offer.Offer;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/offer")
public class OfferController {

    @PostMapping("/add")
    public long addOffer(HttpSession session, HttpServletRequest request,
                        @RequestParam("data") String data)
            throws IOException {
        return OfferService.addOffer(session, request, data).getId();
    }

    @GetMapping("/getAll")
    public List<Offer> getAllOffers(HttpSession session) {
        return OfferService.getAllOffers(session);
    }

    @GetMapping("/getAllActive")
    public List<Offer> getAllActive(HttpSession session) {
        return OfferService.getAllActiveOffers(session);
    }

    @PostMapping("/getById")
    public Offer getOfferById(HttpSession session, @RequestParam("offerId") String offerId) {
        return OfferService.getOfferById(session, offerId);
    }
}
