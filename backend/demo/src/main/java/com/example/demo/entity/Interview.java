package com.example.demo.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "interviews")
public class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int interview_id;

    private int application_id;
    private LocalDate interview_date;
    private LocalTime interview_time;
    private String mode;
    private String status;

    public Interview() {
    }

    public int getInterview_id() {
        return interview_id;
    }

    public void setInterview_id(int interview_id) {
        this.interview_id = interview_id;
    }

    public int getApplication_id() {
        return application_id;
    }

    public void setApplication_id(int application_id) {
        this.application_id = application_id;
    }

    public LocalDate getInterview_date() {
        return interview_date;
    }

    public void setInterview_date(LocalDate interview_date) {
        this.interview_date = interview_date;
    }

    public LocalTime getInterview_time() {
        return interview_time;
    }

    public void setInterview_time(LocalTime interview_time) {
        this.interview_time = interview_time;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}