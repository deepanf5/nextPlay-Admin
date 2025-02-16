import { Component } from '@angular/core';
import { CoreModule } from '../../core/core.module';

@Component({
  selector: 'app-asidebar',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './asidebar.component.html',
  styleUrl: './asidebar.component.scss'
})
export class AsidebarComponent {

}
