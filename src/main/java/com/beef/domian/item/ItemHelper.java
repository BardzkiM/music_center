package com.beef.domian.item;

import com.beef.domian.BaseHelper;

import javax.persistence.TypedQuery;

public class ItemHelper extends BaseHelper {

    public static void createItem(Item item) {
        persist(item.getAddress());
        persist(item);
    }
}
