package com.example.phonebook.API;

import com.example.phonebook.model.PhoneNumber;
import com.example.phonebook.service.PhoneNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("api/v1/phonenumber")
@RestController
public class PhoneNumberController {


    private final PhoneNumberService phoneNumberService;

    @Autowired
    public PhoneNumberController(PhoneNumberService phoneNumberService) {
        this.phoneNumberService = phoneNumberService;
    }

    @PostMapping
    public void addPhoneNumber(@RequestBody PhoneNumber phoneNumber) {
        phoneNumberService.addPhoneNumber(phoneNumber);
    }

    @GetMapping
    public List<PhoneNumber> getAllNumbers() {
        return phoneNumberService.getAllNumbers();
    }



    @GetMapping(path = "{id}")
    public Optional<PhoneNumber> selectNumberById(@PathVariable("id") UUID id) {

        return phoneNumberService.getNumberById(id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteNumberById(@PathVariable("id") UUID id) {

         phoneNumberService.deleteNumber(id);
    }

    @PutMapping(path = "{id}")
    public void updateNumberById(@PathVariable("id") UUID id,@RequestBody PhoneNumber phoneNumber) {

        phoneNumberService.updateNumber(id,phoneNumber);
    }



}
