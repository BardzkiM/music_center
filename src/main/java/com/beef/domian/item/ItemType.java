package com.beef.domian.item;

public enum ItemType {
    ROOM("room"),
    GUITAR("guitar"),
    DRUMS("drums"),
    SOUND_SYSTEM("sound system"),
    BASS_GUITAR("bass guitar"),
    SAXOPHONE("saxophone"),
    THROMBONE("thrombone");

    private final String name;

    ItemType(final String name) {
        this.name = name;
    }

    public String toString() {
        return name;
    }
}
