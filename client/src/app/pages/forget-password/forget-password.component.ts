import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export default class ForgetPasswordComponent implements OnInit {
  fb = inject(FormBuilder)
  router = inject(Router)
  authService = inject(AuthService)

  forgotpasswordForm !: FormGroup

  ngOnInit(): void {
    this.forgotpasswordForm = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])]
    })
  }

    submit(){
      console.log(this.forgotpasswordForm.value);
    }
  
}
