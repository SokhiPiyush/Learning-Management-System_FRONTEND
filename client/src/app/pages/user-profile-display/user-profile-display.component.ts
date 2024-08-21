import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile-display',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-profile-display.component.html',
  styleUrl: './user-profile-display.component.css'
})
export default class UserProfileDisplayComponent implements OnInit {
  
  authService = inject(AuthService);

  id: number = 52;
  fName: string = "";
  lName: string = "";
  about: string = "";
  education: string = "";
  occupation: string = "";

  profileImageUrl: string = "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg";

  ngOnInit(): void {
    this.fetchUserProfile();
  }

  fetchUserProfile(): void {
    this.authService.getProfileDataService().subscribe({
      next: (res) => {
        this.id = res.id;
        this.fName = res.firstName;
        this.lName = res.lastName;
        this.about = res.about;
        this.education = res.education;
        this.occupation = res.occupation;
        
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
