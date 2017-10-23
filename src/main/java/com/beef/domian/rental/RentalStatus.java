package com.beef.domian.rental;

public enum RentalStatus {
    ACTIVE("A"),
    FINISHED("F"),
    CANCELED("X");

    private final String status;

    RentalStatus(final String status) {
        this.status = status;
    }

    public String toString() {
        return status;
    }
}
