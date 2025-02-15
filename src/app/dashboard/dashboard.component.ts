import { Component } from '@angular/core';
import { AheaderComponent } from './aheader/aheader.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AheaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
