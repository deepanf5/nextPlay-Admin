import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CoreModule } from '../../core/core.module';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,CoreModule,PrimengModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!:FormGroup

  constructor(private fb:FormBuilder) {

    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  submitForm() {
    console.log(this.loginForm.value)
  }


}
