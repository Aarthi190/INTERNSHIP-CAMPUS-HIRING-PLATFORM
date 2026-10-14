package com.example.demo.controller;

import com.example.demo.entity.Application;
import com.example.demo.repository.ApplicationRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationRepository applicationRepository;

    public ApplicationController(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @GetMapping
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    @PostMapping
    public Application addApplication(@RequestBody Application application) {
        return applicationRepository.save(application);
    }
}