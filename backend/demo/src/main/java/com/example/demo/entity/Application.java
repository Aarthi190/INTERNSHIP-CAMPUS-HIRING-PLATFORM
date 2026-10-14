package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int application_id;

    private int student_id;
    private Integer job_id;
    private Integer internship_id;
    private LocalDate applied_date;
    private String status;

    public Application() {
    }

    public int getApplication_id() {
        return application_id;
    }

    public void setApplication_id(int application_id) {
        this.application_id = application_id;
    }

    public int getStudent_id() {
        return student_id;
    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public Integer getJob_id() {
        return job_id;
    }

    public void setJob_id(Integer job_id) {
        this.job_id = job_id;
    }

    public Integer getInternship_id() {
        return internship_id;
    }

    public void setInternship_id(Integer internship_id) {
        this.internship_id = internship_id;
    }

    public LocalDate getApplied_date() {
        return applied_date;
    }

    public void setApplied_date(LocalDate applied_date) {
        this.applied_date = applied_date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}