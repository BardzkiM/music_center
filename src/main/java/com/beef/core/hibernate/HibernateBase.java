package com.beef.core.hibernate;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class HibernateBase {

    private static EntityManagerFactory entityManagerFactory;

    public static EntityManager entityManager;

    public static void createEntityManagers() {
        entityManagerFactory = Persistence.createEntityManagerFactory("musicCenterDatabase");
        entityManager = entityManagerFactory.createEntityManager();
    }

    public static void closeEntityManagers() {
        entityManager.close();
        entityManagerFactory.close();
        entityManagerFactory = Persistence.createEntityManagerFactory("musicCenterDatabase");
        entityManager = entityManagerFactory.createEntityManager();
    }
}
