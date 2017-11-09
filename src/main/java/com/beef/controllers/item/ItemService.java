package com.beef.controllers.item;

import com.beef.core.hibernate.HibernateBase;
import com.beef.core.utils.FileUtils;
import com.beef.core.utils.UserUtils;
import com.beef.domian.address.Address;
import com.beef.domian.address.AddressHelper;
import com.beef.domian.item.Item;
import com.beef.domian.item.ItemHelper;
import com.beef.domian.user.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
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
                        List<MultipartFile> images,
                        boolean useUserAddress)
            throws IOException {
        HibernateBase.closeEntityManagers();

        Item item = new ObjectMapper().readValue(itemData, Item.class);
        User sessionUser = UserUtils.getSessionUser(session);

        if (useUserAddress) {
            item.setAddress(new Address(sessionUser.getAddress()));
        }

        item.setImages(saveImages(request, images));
        item.setUser(sessionUser);
        item.setActive(true);

        AddressHelper.createAddress(item.getAddress());
        ItemHelper.createItem(item);

        return item;
    }

    protected static List<Item> getAllItems(HttpSession session) {
        HibernateBase.closeEntityManagers();

        if (UserUtils.isUserAuthenticated(session)) {
            User sessionUser = UserUtils.getSessionUser(session);
            return ItemHelper.getAllItems(sessionUser.getId());
        }

        return null;
    }

    protected static Item getItemById(HttpSession session, String itemId) {
        HibernateBase.closeEntityManagers();

        if (UserUtils.isUserAuthenticated(session)) {
            long userId = UserUtils.getSessionUser(session).getId();

            return ItemHelper.getItemById(Long.parseLong(itemId), userId);
        }

        return null;
    }
}
