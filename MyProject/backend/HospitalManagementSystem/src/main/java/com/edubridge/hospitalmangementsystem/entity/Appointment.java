package com.edubridge.hospitalmangementsystem.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="appointment")
@Data
@Getter
@Setter
public class Appointment {
	
	@Id
	private long id;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="name")
	private String name;
	@Column(name="age")
	private String age;
	@Column(name="symptoms")
	private String symptoms;
	@Column(name="number")
	private String number;
}
