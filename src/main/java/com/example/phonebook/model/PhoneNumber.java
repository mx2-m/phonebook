package com.example.phonebook.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class PhoneNumber {

    private final UUID id;
    private String name;
    private Integer number;

    public PhoneNumber(@JsonProperty("id") UUID id, @JsonProperty("name") String name, @JsonProperty("number") Integer number) {
        this.id = id;
        this.name = name;
        this.number = number;
    }

  /*  public PhoneNumber(String name, Integer number) {
        this.name = name;
        this.number = number;
    }*/

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getNumber() {
        return number;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
}
