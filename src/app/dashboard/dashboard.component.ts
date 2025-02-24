import { Component } from '@angular/core';
import { AheaderComponent } from './aheader/aheader.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { CoreModule } from '../core/core.module';
import { PrimengModule } from '../primeng/primeng.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
