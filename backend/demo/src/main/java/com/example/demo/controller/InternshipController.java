package com.example.demo.controller;

import com.example.demo.entity.Internship;
import com.example.demo.repository.InternshipRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/internships")
public class InternshipController {

    private final InternshipRepository internshipRepository;

    public InternshipController(InternshipRepository internshipRepository) {
        this.internshipRepository = internshipRepository;
    }

    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    @PostMapping
    public Internship addInternship(@RequestBody Internship internship) {
        return internshipRepository.save(internship);
    }
}