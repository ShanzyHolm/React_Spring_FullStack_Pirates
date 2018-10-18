package com.example.codeclan.pirateservice.controller;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.repository.pirates.PirateRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PirateController {
    @Autowired
    PirateRepository pirateRepository;

    @JsonIgnore
    @GetMapping(value = "/pirates/age/{age}")
    public List<Pirate> getAllPirates(@PathVariable int age){
        return pirateRepository.getPiratesOverCertainAge(age);
    }
}
