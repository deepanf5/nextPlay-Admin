import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CoreModule } from '../../core/core.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,CoreModule,PrimengModule],
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!:FormGroup

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private messageService:MessageService
  ) {

    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  submitForm() {
     this.loginForm.get('email')?.value === 'mark11@gmail.com' 
     && this.loginForm.get('password')?.value === 'd34s' ? this.router.navigate(['/dashboard']) :
     this.messageService.add({ severity: 'error', detail: 'Invalid password or Email' });
   
  }


}
