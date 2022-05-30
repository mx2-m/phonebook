package com.example.phonebook.dao;

import com.example.phonebook.model.PhoneNumber;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PhoneNumberDao {
    int insertPhoneNumber(UUID id, PhoneNumber phoneNumber);

    default int insertPhoneNumber(PhoneNumber phoneNumber) {
        UUID id = UUID.randomUUID();
        return insertPhoneNumber(id, phoneNumber);
    }

    List<PhoneNumber> selectAllNumbers();

    int deleteNumberById(UUID id);

    int updateNumberById(UUID id,PhoneNumber number);

    Optional<PhoneNumber> selectNumberById(UUID id);

}
