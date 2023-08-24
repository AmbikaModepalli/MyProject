package com.edubridge.hospitalmangementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.edubridge.hospitalmangementsystem.entity.Appointment;

@RepositoryRestResource
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}

