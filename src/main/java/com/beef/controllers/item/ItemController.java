package com.beef.controllers.item;

import com.beef.domian.item.Item;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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
                        @RequestParam("images") List<MultipartFile> images)
            throws IOException {
        return ItemService.addItem(session, request, itemData, images).getId();
    }

    @GetMapping("/getAll")
    public List<Item> getAllItems(HttpSession session) {
        return ItemService.getAllItems(session);
    }

    @PostMapping("/getById")
    public Item getItemById(HttpSession session, @RequestParam("itemId") String itemId) {
        return ItemService.getItemById(session, itemId);
    }
}
