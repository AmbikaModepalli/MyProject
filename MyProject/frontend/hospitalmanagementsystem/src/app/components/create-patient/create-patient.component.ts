import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/common/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.goToPatientList();
  }, 
  error => console.log(error));
}
  goToPatientList() {
    this.router.navigate(['/docdash']);
    

  }

  onSubmit() {
    console.log(this.patient);
    this.savePatient();
  }

}
