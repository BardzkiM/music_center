package com.beef.domian.user;

import com.beef.core.hibernate.HibernateBase;
import com.beef.domian.BaseHelper;

import javax.persistence.TypedQuery;
import java.util.List;

public class UserHelper extends BaseHelper {

    public static User isUserValid(User user) {

        TypedQuery<User> query = HibernateBase.entityManager.createQuery("select u from User u where u.login=:login and u.password=:password and u.active = 1", User.class);
        query.setParameter("login", user.getLogin());
        query.setParameter("password", user.getPassword());

        try {
            user = query.getSingleResult();
        } catch (Exception e) {
            user = null;
        }

        return user;
    }

    public static boolean isUserExisting(User user) {

        TypedQuery<User> query = HibernateBase.entityManager.createQuery("select u from User u where u.login=:login", User.class);
        query.setParameter("login", user.getLogin());

        try {
            user = query.getSingleResult();
        } catch (Exception e) {
            user = null;
        }

        return user != null;
    }

    public static boolean createUser(User user) {
        boolean canCreate = !isUserExisting(user);

        if (canCreate) {
            user.setActive(true);
            persist(user.getAddress());
            persist(user);
        }

        return canCreate;
    }

    public static User updateUser(long id, User user) {
        HibernateBase.entityManager.getTransaction().begin();
        User dbUser = HibernateBase.entityManager.find(User.class, id);
        dbUser.updateData(user);
        HibernateBase.entityManager.getTransaction().commit();
        return dbUser;
    }

    public static void changeUserStatus(long id, boolean status) {
        HibernateBase.entityManager.getTransaction().begin();
        User dbUser = HibernateBase.entityManager.find(User.class, id);
        dbUser.setActive(status);
        HibernateBase.entityManager.persist(dbUser);
        HibernateBase.entityManager.getTransaction().commit();
    }

    public static List<User> getUsers() {
        List<User> users;
        TypedQuery<User> query = HibernateBase.entityManager.createQuery("select u from User u", User.class);

        try {
            users = query.getResultList();
        } catch (Exception e) {
            users = null;
        }

        return users;
    }

    public static User getUserById(long id) {
        return HibernateBase.entityManager.find(User.class, id);
    }

}
