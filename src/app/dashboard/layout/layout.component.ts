import { Component } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { AheaderComponent } from '../aheader/aheader.component';
import { AsidebarComponent } from '../asidebar/asidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CoreModule,AheaderComponent,AsidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
