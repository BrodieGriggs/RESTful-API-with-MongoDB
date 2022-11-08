package com.example.RESTful.API.with.MongoDB.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
@RestController
@RequestMapping("/customers")
public class CustomerApi {

    @Autowired
    private CustomerRepository repository;

    @GetMapping("/get-all")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        List<Customer> allCustomers = repository.findAll();
        if(allCustomers.isEmpty()) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(allCustomers, HttpStatus.OK);
    }

    @PostMapping("/add")
    public void addCustomer(@RequestBody Customer newCustomer) {
        repository.save(newCustomer);
    }
}
