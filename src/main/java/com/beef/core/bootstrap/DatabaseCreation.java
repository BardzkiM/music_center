package com.beef.core.bootstrap;

import com.beef.domian.address.Address;
import com.beef.domian.user.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class DatabaseCreation {
    public static void main(String[] args) {
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("musicCenterDatabaseCreate");
        EntityManager entityManager = entityManagerFactory.createEntityManager();

        entityManager.getTransaction().begin();
        User admin = getDefaultAdminUser();
        entityManager.persist(admin.getAddress());
        entityManager.persist(admin);
        entityManager.getTransaction().commit();

        entityManager.close();
        entityManagerFactory.close();
    }

    private static User getDefaultAdminUser() {
        User user = new User();
        user.setLogin("admin");
        user.setPassword("admin");
        user.setFirstName("admin");
        user.setLastName("admin");
        user.setAddress(
                new Address("Kraków", "Krakowska", (short) 28, (short) 77, "32-222")
        );
        user.setEmail("admin@admin.pl");
        user.setActive(true);

        return user;
    }
}

