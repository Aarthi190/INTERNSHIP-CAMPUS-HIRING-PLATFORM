package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.StudentSkill;
import com.example.demo.repository.StudentSkillRepository;

@RestController
@RequestMapping("/student-skills")
public class StudentSkillController {

    private final StudentSkillRepository studentSkillRepository;

    public StudentSkillController(StudentSkillRepository studentSkillRepository) {
        this.studentSkillRepository = studentSkillRepository;
    }

    @GetMapping
    public List<StudentSkill> getAllStudentSkills() {
        return studentSkillRepository.findAll();
    }

    @PostMapping
    public StudentSkill addStudentSkill(@RequestBody StudentSkill studentSkill) {
        return studentSkillRepository.save(studentSkill);
    }
}