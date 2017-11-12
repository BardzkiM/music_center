package com.beef.controllers.rental;

import com.beef.domian.rental.Rental;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

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
}
