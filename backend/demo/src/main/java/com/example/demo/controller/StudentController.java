package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;

@RestController
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
@RequestMapping("/students")
public class StudentController {

    private final StudentRepository studentRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // 1. Get all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // 2. Student Registration
    @PostMapping
    public ResponseEntity<?> addStudent(@RequestBody Student student) {

        // Validate required fields
        if (student.getName() == null
                || student.getName().isBlank()
                || student.getEmail() == null
                || student.getEmail().isBlank()
                || student.getPassword() == null
                || student.getPassword().isBlank()) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "message",
                            "Name, email and password are required."));
        }

        // Clean email
        String email = student.getEmail().trim();

        // Check duplicate email
        if (studentRepository.findByEmail(email).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    Map.of(
                            "message",
                            "Email already registered."));
        }

        student.setEmail(email);

        // Encrypt password before saving
        student.setPassword(
                passwordEncoder.encode(student.getPassword()));

        // Save student in MySQL database
        Student savedStudent = studentRepository.save(student);

        // Send success response
        return ResponseEntity.status(HttpStatus.CREATED).body(
                Map.of(
                        "message", "Registration successful.",
                        "id", savedStudent.getId(),
                        "name", savedStudent.getName(),
                        "email", savedStudent.getEmail()));
    }

    // 3. Student Login
    @PostMapping("/login")
    public ResponseEntity<?> loginStudent(
            @RequestBody Map<String, String> loginData) {

        String email = loginData.get("email");
        String password = loginData.get("password");

        // Validate login fields
        if (email == null || email.isBlank()
                || password == null || password.isBlank()) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "message",
                            "Email and password are required."));
        }

        // Find student using email
        Student student = studentRepository
                .findByEmail(email.trim())
                .orElse(null);

        // Verify password
        if (student == null
                || student.getPassword() == null
                || !passwordEncoder.matches(
                        password,
                        student.getPassword())) {

            return ResponseEntity.status(
                    HttpStatus.UNAUTHORIZED).body(
                            Map.of(
                                    "message",
                                    "Invalid email or password."));
        }

        // Login successful
        return ResponseEntity.ok(
                Map.of(
                        "message", "Login successful.",
                        "id", student.getId(),
                        "name", student.getName(),
                        "email", student.getEmail(),
                        "role", "student"));
    }
}