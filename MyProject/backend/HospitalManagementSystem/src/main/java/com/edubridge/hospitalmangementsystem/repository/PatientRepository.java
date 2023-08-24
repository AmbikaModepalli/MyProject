package com.edubridge.hospitalmangementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.edubridge.hospitalmangementsystem.entity.Patient;

@RepositoryRestResource
public interface PatientRepository extends JpaRepository<Patient, Long> {

	public void deleteById(Long id);
	
}


