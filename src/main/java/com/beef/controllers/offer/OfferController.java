package com.beef.controllers.offer;

import com.beef.domian.offer.Offer;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/offer")
public class OfferController {

    @PostMapping("/add")
    public long addOffer(HttpSession session, @RequestParam("data") String data) throws IOException {
        Offer offer = OfferService.addOffer(session, data);
        if (offer != null) {
            return offer.getId();
        }
        return -1;
    }

    @GetMapping("/all")
    public List<Offer> getAllOffers(HttpSession session) {
        return OfferService.getAllOffers(session);
    }

    @GetMapping("/allActive")
    public List<Offer> getAllActive(HttpSession session) {
        return OfferService.getAllActiveOffers(session);
    }

    @GetMapping("/{id}")
    public Offer getOfferById(@PathVariable(value = "id") String id) {
        return OfferService.getOfferById(id);
    }

    @PostMapping("/search")
    public List<Offer> search(HttpSession session, @RequestParam("data") String data) throws IOException {
        return OfferService.search(session, data);
    }

    @GetMapping("/getOffersByUserId/{id}")
    public List<Offer> getOffersByUserId(HttpSession session, @PathVariable(value = "id") String id){
        return OfferService.getOffersByUserId(session, id);
    }
}
