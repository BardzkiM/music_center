package com.beef.domian.item;

public enum ItemType {
    ROOM("room"),
    GUITAR("guitar"),
    DRUMS("drums"),
    SOUND_SYSTEM("sound_system"),
    BASS_GUITAR("bass_guitar"),
    SAXOPHONE("saxophone"),
    TROMBONE("trombone");

    private final String type;

    ItemType(final String type) {
        this.type = type;
    }

    public String toString() {
        return type;
    }
}
