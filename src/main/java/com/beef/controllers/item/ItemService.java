package com.beef.controllers.item;

import com.beef.core.hibernate.HibernateBase;
import com.beef.core.utils.Utils;
import com.beef.domian.address.Address;
import com.beef.domian.address.AddressHelper;
import com.beef.domian.item.Item;
import com.beef.domian.item.ItemHelper;
import com.beef.domian.user.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.Hibernate;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class ItemService {

    private static String uploadsPath = "/public/uploads/uploaded_images/";

    protected static String saveImage(HttpServletRequest request, MultipartFile[] images) throws IOException {
        String imagePathName = "";
        for(MultipartFile image : images) {
            imagePathName = uploadsPath + image.getOriginalFilename();
            File imageFile = new File(request.getRealPath(imagePathName));

            image.transferTo(imageFile);
        }
        return imagePathName;
    }

    protected static Item addItem(HttpSession session, HttpServletRequest request,
                                  String itemData, String addressData, MultipartFile[] image) throws IOException {
        HibernateBase.closeEntityManagers();

        ArrayList<String> imageRef = new ArrayList();
        imageRef.add(saveImage(request, image));

        Item item = new ObjectMapper().readValue(itemData, Item.class);
        Address address = new ObjectMapper().readValue(addressData, Address.class);
        User user = (User) session.getAttribute(Utils.sessionUserName);

        item.setImages(imageRef);
        item.setAddress(address);
        item.setUser(user);

        AddressHelper.createAddress(address);
        ItemHelper.createItem(item);

        return item;
    }
}
