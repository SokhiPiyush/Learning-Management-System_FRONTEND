import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService)

  loginForm !: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.compose([Validators.required, Validators.email])],
      password: ['',Validators.required],
    }
  );
  }

  login(){
    console.log(this.loginForm.value)
    this.authService.loginService(this.loginForm.value).subscribe({
      next:(res)=>{
        alert("Login successfull")
        this.loginForm.reset();
        this.router.navigate(['home'])
      },
      error:(err)=>{
        
        console.log(err);
      }
    }
  )
}

}
