import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CoreModule } from '../../core/core.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { emailValidator } from '../../directives/email-validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,CoreModule,PrimengModule],
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  invalidEmailMessage!: Message[];
  emailRequired!:Message[];
  passwordRequired!:Message[];
  
  
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private messageService:MessageService
  ) {
    
    this.loginForm = this.fb.group({
      email:['',Validators.required,emailValidator.email],
      password:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.invalidEmailMessage = [
      { severity: 'error', detail: 'Invalid Email Id' },
  ];
    this.emailRequired = [
      { severity: 'error', detail: 'Email is required' },
  ];
    this.passwordRequired = [
      { severity: 'error', detail: 'Password is required' },
  ];
  }

  submitForm() {
     this.loginForm.get('email')?.value === 'mark11@gmail.com' 
     && this.loginForm.get('password')?.value === 'd34s' ? this.router.navigate(['dashboard']) :
     this.messageService.add({ severity: 'error', detail: 'Invalid password or Email' });
   
  }


}
