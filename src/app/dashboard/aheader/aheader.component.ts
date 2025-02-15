import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng.module';
import { CoreModule } from '../../core/core.module';

@Component({
  selector: 'aheader',
  standalone: true,
  imports: [PrimengModule,CoreModule],
  templateUrl: './aheader.component.html',
  styleUrl: './aheader.component.scss'
})
export class AheaderComponent implements OnInit {
  sidebarVisible:boolean = false
  

  ngOnInit(): void {
   
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible
  }



}
