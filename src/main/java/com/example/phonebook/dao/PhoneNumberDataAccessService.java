package com.example.phonebook.dao;

import com.example.phonebook.model.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
//import org.springframework.jdbc.core.JdbcTemplate;


import java.util.*;

@Repository("postgres")
public class PhoneNumberDataAccessService implements PhoneNumberDao {


    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PhoneNumberDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertPhoneNumber(UUID id, PhoneNumber phoneNumber) {
        id = UUID.randomUUID();
        String sql = "INSERT INTO num (id,name,number)  VALUES (?,?,?) ";
        return jdbcTemplate.update(
                sql,
                id,
                phoneNumber.getName(),
                phoneNumber.getNumber()
        );
    }

    @Override
    public List<PhoneNumber> selectAllNumbers() {

        String sql = "SELECT id,name,number FROM num";

        List<PhoneNumber> numbers = jdbcTemplate.query(sql, (resultSet, i) -> {
            return new PhoneNumber(UUID.fromString(resultSet.getString("id")),
                    resultSet.getString("name"),
                    Integer.valueOf(resultSet.getString("number")));
        });

        return numbers;
    }

    @Override
    public int deleteNumberById(UUID id) {
        String sql = "DELETE FROM num WHERE id=? ";

        return jdbcTemplate.update(sql, id);

    }

    @Override
    public int updateNumberById(UUID id, PhoneNumber number) {
        String sql = "UPDATE num SET number = ?, name=?  WHERE id = ?";
        return jdbcTemplate.update(sql, number.getNumber(), number.getName(), id);
    }


    @Override
    public Optional<PhoneNumber> selectNumberById(UUID id) {
        String sql = "SELECT id,name,number FROM num WHERE id=? ";

        PhoneNumber number = jdbcTemplate.queryForObject(sql,
                new Object[]{id},   //argumenti
                (resultSet, i) -> {

                    return new PhoneNumber(UUID.fromString(resultSet.getString("id")),
                            resultSet.getString("name"),
                            Integer.valueOf(resultSet.getString("number")));
                });

        return Optional.ofNullable(number);
    }

}
