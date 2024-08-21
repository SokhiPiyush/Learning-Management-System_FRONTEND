import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterModule,],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export default class UserProfileComponent implements OnInit {

  fb = inject(FormBuilder);
  router = inject(Router);
  profileForm !: FormGroup;
  authService = inject(AuthService);
  
  id:number=52
  fName:string = ""
  lName:string = ""
  email:string =""
  contact?:number;
  about?:string="";
  age?:number;
  address?:string="";
  city?:string="";
  state?:string="";
  country?:string="";
  pinCode?:number;
  gender?:string;
  occupation?:string;
  education?:string;
  dateOfBirth?:string;

  isEditing:boolean = false;



  ngOnInit(): void {
    this.profileForm = this.fb.group({
      id:[this.id],
      firstName: [this.fName, Validators.required],
      lastName: [this.lName, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      contact: [this.contact, [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      about: [this.about, Validators.maxLength(1000)],
      age: [this.age, [Validators.required, Validators.min(1), Validators.max(120)]],
      address: [this.address],
      city: [this.city],
      state: [this.state],
      country: [this.country],
      pinCode: [this.pinCode, Validators.pattern(/^[0-9]{6}$/)],
      gender: [this.gender],
      occupation: [this.occupation],
      education:[this.education],
      dateOfBirth:[this.dateOfBirth]
    });

    this.authService.getProfileDataService().subscribe({
      next:(res) =>{
        console.log("before",res);
        this.profileForm.patchValue(res);
        console.log("after",res);


      },
      error:(err) =>{
        console.log(err);
      }
    })
    
    this.profileForm.valueChanges.subscribe(values => {
      this.id;
      this.fName = values.firstName || '';
      this.lName = values.lastName || '';
      this.email = values.email || '';
      this.contact = values.contact;
      this.about = values.about || '';
      this.age = values.age;
      this.address = values.address || '';
      this.city = values.city || '';
      this.state = values.state || '';
      this.country = values.country || '';
      this.pinCode = values.pinCode;
      this.gender = values.gender || '';
      this.occupation = values.occupation || '';
      this.education = values.education || '';
      this.dateOfBirth = values.dateOfBirth || '';
    });
  }


  onSubmit(): void {
    if(this.profileForm.valid){
      this.authService.updateProfileService(this.profileForm.value).subscribe({
        next:(res)=>{
          console.log("Form Submitted", this.profileForm.value);
          console.log(this.fName,this.lName,this.age,this.gender);
          alert("Form submitted");
          this.isEditing=false;

        },
        error:(err)=>{  
            console.log(err);

        }
      })
    }
    else{
      console.log("Form is Invalid");
    }
  }

  isEdit():void {
    this.isEditing=true;
  }
}
