package com.beef.controllers.rental;

import com.beef.domian.rental.Rental;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/rental")
public class RentalController {

    @PostMapping("/add")
    public long addRental(HttpSession session,
                          @RequestParam("data") String data,
                          @RequestParam("offerId") long offerId,
                          @RequestParam("useUserAddress") boolean useUserAddress)
            throws IOException {
        Rental rental = RentalService.addRental(session, data, offerId, useUserAddress);

        if (rental != null) {
            return rental.getId();
        }
        return -1;
    }

    @GetMapping("/getAllRentalsByOfferId/{id}")
    public List<Rental> getAllRentalsByOfferId(@PathVariable(value = "id") long offerId) throws IOException {
        return RentalService.getAllRentalsByOfferId(offerId);
    }

    @GetMapping("/getAllUserRentals")
    public List<Rental> getAllUserRentals(HttpSession session) {
        return RentalService.getAllUserRentals(session);
    }

    @GetMapping("/deactivateRentalById/{id}")
    public Rental deactivateRentalById(HttpSession session,
                                       @PathVariable(value = "id") long id) throws IOException {
        return RentalService.deactivateRentalById(session, id);
    }
}
