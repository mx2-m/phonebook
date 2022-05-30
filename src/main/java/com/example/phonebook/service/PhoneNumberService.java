package com.example.phonebook.service;

import com.example.phonebook.dao.PhoneNumberDao;
import com.example.phonebook.model.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PhoneNumberService {


    private final PhoneNumberDao phoneNumberDao;

    @Autowired
    public PhoneNumberService(@Qualifier("postgres") PhoneNumberDao phoneNumberDao) {
        this.phoneNumberDao = phoneNumberDao;

    }

    public int addPhoneNumber(PhoneNumber phoneNumber) {

        return phoneNumberDao.insertPhoneNumber(phoneNumber);
    }

    public List<PhoneNumber> getAllNumbers() {
        return phoneNumberDao.selectAllNumbers();
    }

    public Optional<PhoneNumber> getNumberById(UUID id) {
        return phoneNumberDao.selectNumberById(id);
    }

    public int deleteNumber(UUID id) {
        return phoneNumberDao.deleteNumberById(id);
    }

    public int updateNumber(UUID id, PhoneNumber number) {
        return phoneNumberDao.updateNumberById(id, number);
    }
}
