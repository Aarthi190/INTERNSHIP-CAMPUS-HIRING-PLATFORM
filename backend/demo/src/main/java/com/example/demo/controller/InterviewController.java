package com.example.demo.controller;

import com.example.demo.entity.Interview;
import com.example.demo.repository.InterviewRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/interviews")
public class InterviewController {

    private final InterviewRepository interviewRepository;

    public InterviewController(InterviewRepository interviewRepository) {
        this.interviewRepository = interviewRepository;
    }

    @GetMapping
    public List<Interview> getAllInterviews() {
        return interviewRepository.findAll();
    }

    @PostMapping
    public Interview addInterview(@RequestBody Interview interview) {
        return interviewRepository.save(interview);
    }
}