import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng.module';
import { CoreModule } from '../../core/core.module';
import { Router } from '@angular/router';
import { AsidebarComponent } from '../asidebar/asidebar.component';

@Component({
  selector: 'aheader',
  standalone: true,
  imports: [PrimengModule,CoreModule,AsidebarComponent],
  templateUrl: './aheader.component.html',
  styleUrl: './aheader.component.scss'
})
export class AheaderComponent implements OnInit {
  sidebarVisible:boolean = false

  constructor(
    private router:Router
  ) {}
  

  ngOnInit(): void {
   
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible
  }

  logOut() {

    this.router.navigate([''])
  }



}
