package com.edubridge.hospitalmangementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.edubridge.hospitalmangementsystem.entity.Medicine;

@RepositoryRestResource
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

}
