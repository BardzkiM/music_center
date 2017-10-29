package com.beef.domian.item;

import com.beef.core.hibernate.HibernateBase;
import com.beef.domian.BaseHelper;

import javax.persistence.TypedQuery;
import java.util.List;

public class ItemHelper extends BaseHelper {

    public static void createItem(Item item) {
        persist(item);
    }

    public static List<Item> getItems(String queryValue) {
        List<Item> items;
        TypedQuery<Item> query = HibernateBase.entityManager.createQuery(queryValue, Item.class);

        try {
            items = query.getResultList();
        } catch (Exception e) {
            items = null;
        }

        return items;
    }

    public static List<Item> getAllItems() {
        String query = "select i from Item i";

        return getItems(query);
    }

    public static Item getItemById(long id) {
        return HibernateBase.entityManager.find(Item.class, id);
    }
}
