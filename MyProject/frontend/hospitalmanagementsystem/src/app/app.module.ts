import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { DocdashComponent } from './components/docdash/docdash.component';
import { DocloginComponent } from './components/doclogin/doclogin.component';
import { MedicineListComponent } from './components/medicine-list/medicine-list.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { UpdateMedicineComponent } from './components/update-medicine/update-medicine.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { HttpClientModule } from '@angular/common/http';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
const routes: Routes = [
  { path: '', component: NewsfeedComponent },
  { path: 'doclogin', component: DocloginComponent },
  { path: 'adlogin', component: AdminloginComponent },
  { path: 'home', component: NewsfeedComponent },
  { path: 'createpatient', component: CreatePatientComponent, canActivate: [AuthGuardService] },
  { path: 'docdash', component: DocdashComponent, canActivate: [AuthGuardService] },
  { path: 'updatepatient/:id', component: UpdatePatientComponent, canActivate: [AuthGuardService] },
  { path: 'admindash', component: AdmindashComponent, canActivate: [AuthGuardService] },
  { path: 'medicinelist', component: MedicineListComponent, canActivate: [AuthGuardService] },
  { path: 'createmedicine', component: CreateMedicineComponent, canActivate: [AuthGuardService] },
  { path: 'updatemedicine/:id', component: UpdateMedicineComponent, canActivate: [AuthGuardService] },
  { path: 'appointmentlist', component: AppointmentListComponent, canActivate: [AuthGuardService] },
  { path: 'createappointment', component: CreateAppointmentComponent, canActivate: [AuthGuardService] },
  { path: 'viewpatient/:id', component: ViewPatientComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AdminloginComponent,
    AppointmentListComponent,
    CreateAppointmentComponent,
    CreateMedicineComponent,
    CreatePatientComponent,
    DocdashComponent,
    DocloginComponent,
    MedicineListComponent,
    NewsfeedComponent,
    UpdateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    // Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
