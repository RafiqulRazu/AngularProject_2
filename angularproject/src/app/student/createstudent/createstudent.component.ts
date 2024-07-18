import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { LocationService } from '../../location/location.service';
import { StudentModel } from '../student.model';
import { error } from 'console';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrl: './createstudent.component.css'
})
export class CreatestudentComponent implements OnInit{

  locations: Location[]=[];
  students: StudentModel[]=[];
  StudentForm!: FormGroup;
  student: StudentModel = new StudentModel();

  constructor(
    private studentService: StudentserviceService,
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.loadLocation();
    this.StudentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      cellNo: [''],
      location: this.formBuilder.group({
        id: [undefined],
        name: [undefined,],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        availableUnits: [undefined],
        wifi: [undefined],
        laundry: [undefined]
      })


    });
  }

  

  loadLocation() {
    this.locationService.getLocationForStudent()
      .subscribe({
        next: res => {
          this.locations = res;
        },
        error: error => {
          console.log(error);
        }

      });

  }
  
  
}
