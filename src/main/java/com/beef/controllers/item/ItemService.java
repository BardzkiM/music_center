package com.beef.controllers.item;

import com.beef.core.hibernate.HibernateBase;
import com.beef.core.utils.FileUtils;
import com.beef.core.utils.UserUtils;
import com.beef.domian.address.Address;
import com.beef.domian.address.AddressHelper;
import com.beef.domian.item.Item;
import com.beef.domian.item.ItemHelper;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class ItemService {

    private static List<String> saveImages(HttpServletRequest request, List<MultipartFile> images) {
        return images
                .stream()
                .map(image -> FileUtils.saveFile(request, image))
                .collect(Collectors.toList());
    }

    static Item addItem(HttpSession session,
                        HttpServletRequest request,
                        String itemData,
                        List<MultipartFile> images)
            throws IOException {
        HibernateBase.closeEntityManagers();

        Item item = new ObjectMapper().readValue(itemData, Item.class);
        Address address = item.getAddress();

        item.setImages(saveImages(request, images));
        item.setUser(UserUtils.getSessionUser(session));

        AddressHelper.createAddress(address);
        ItemHelper.createItem(item);

        return item;
    }
}
