package com.beef.domian.item;

import com.beef.core.hibernate.HibernateBase;
import com.beef.domian.BaseHelper;

import javax.persistence.TypedQuery;
import java.util.List;

public class ItemHelper extends BaseHelper {

    public static void createItem(Item item) {
        persist(item.getAddress());
        persist(item);
    }

    public static List<Item> getAllItems(long userId) {
        String queryString = "select i from Item i where i.user.id = :userId";
        TypedQuery<Item> query = HibernateBase.entityManager.createQuery(queryString, Item.class);
        query.setParameter("userId", userId);

        try {
            List<Item> items = query.getResultList();
            items.forEach(Item::clearUser);
            return items;
        } catch (Exception e) {
            return null;
        }
    }

    public static Item getItemById(long id) {
        Item item = HibernateBase.entityManager.find(Item.class, id);
        item.clearUser();
        return item;
    }
}
