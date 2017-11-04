package com.beef.controllers.item;

import com.beef.domian.item.Item;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {

    @PostMapping("/add")
    public long addItem(HttpSession session, HttpServletRequest request,
                        @RequestParam("data") String itemData,
                        @RequestParam("images") List<MultipartFile> images,
                        @RequestParam("useUserAddress") boolean useUserAddress)
            throws IOException {
        return ItemService.addItem(session, request, itemData, images).getId();
    }

    @GetMapping("/all")
    public List<Item> getAllItems(HttpSession session) {
        return ItemService.getAllItems(session);
    }

    @GetMapping("/{id}")
    public Item getItemById(HttpSession session, @PathVariable(value="id") String id) {
        return ItemService.getItemById(session, id);
    }
}
