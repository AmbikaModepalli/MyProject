package com.edubridge.hospitalmangementsystem.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.edubridge.hospitalmangementsystem.entity.Patient;
import com.edubridge.hospitalmangementsystem.repository.PatientRepository;

public class PatientService {
	
	@Autowired
	private PatientRepository patientRepository;
	
	public Patient updatePatient(Patient patient) {
       
		Long id = patient.getId();
		Patient std = patientRepository.findById(id).get();
		std.setAge(patient.getAge());
		std.setName(patient.getName());
		std.setBlood(patient.getBlood());
		std.setDose(patient.getDose());
		std.setFees(patient.getFees());
		std.setPrescription(patient.getPrescription());
		std.setUrgency(patient.getUrgency());
		std.setId(patient.getId());
		return patientRepository.save(std);
		
	}

}
