import { Component, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit{
  movies:any = [];
  
  ngOnInit(): void {

    this.movies = [
      {
        name:'movies one',
        rating:60,
        director:'ajdy',
        year:'2013',
        image:"https://i.pinimg.com/736x/d2/ba/6d/d2ba6dad1f923384b7db261d0f8f4d31.jpg"
      },
      {
        name:'movies one',
        rating:60,
        director:'ajdy',
        year:'2013',
        image:"https://4kwallpapers.com/images/walls/thumbs_3t/16612.jpg"

      },
      {
        name:'movies one',
        rating:60,
        director:'ajdy',
        year:'2013',
        image:"https://images7.alphacoders.com/135/thumb-1920-1358613.jpeg"
      },
      {
        name:'movies one',
        rating:60,
        director:'ajdy',
        year:'2013',
        image:"https://images7.alphacoders.com/136/thumb-1920-1364834.png"
      },
      {
        name:'movies one',
        rating:60,
        director:'ajdy',
        year:'2013',
        image:"https://i.pinimg.com/736x/aa/8d/24/aa8d248af3676f1116bf71c847f8878c.jpg"
      }
    ]
    
  }



}
