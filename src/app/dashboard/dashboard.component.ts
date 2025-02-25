import { Component, OnInit } from '@angular/core';
import { AheaderComponent } from './aheader/aheader.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { CoreModule } from '../core/core.module';
import { PrimengModule } from '../primeng/primeng.module';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  movies:any = [];

  first: number = 0;

    rows: number = 10;

  
  ngOnInit(): void {

    this.movies = [
      {
        name:'Birds of Prey and the Fantabulous Emancipation of One Harley Quinn',
        rating:60,
        director:'Cathy Yan',
        year:'2020',
        image:"https://wallpapers.com/images/high/birds-of-prey-quality-harley-photograph-v7jqp0xxf0qh00aj.webp",
        genre:'Action/Comdey'
      },
      {
        name:'Mufasa: The Lion King',
        rating:6.7,
        director:'Barry Jenkins',
        year:'2024',
        image:"https://4kwallpapers.com/images/walls/thumbs_3t/16612.jpg",
        genre:'Adventure/Drama'

      },
      {
        name:'Wall E',
        rating:8.4,
        director:'Andrew Stanton',
        year:'2008',
        image:"https://images.alphacoders.com/136/thumb-440-1363724.webp",
        genre:'Family/Sci-fi '
      },
      {
        name:'Wolverine & Dead pool',
        rating:7.6,
        director:'Shawn Levy',
        year:'2024',
        image:"https://images3.alphacoders.com/138/thumb-1920-1388592.jpg",
        genre:'Action/Comedy'
      },
      {
        name:'Transformer one',
        rating:7.6,
        director:'Josh Cooley',
        year:'2024',
        image:"https://images3.alphacoders.com/136/thumb-1920-1363121.jpeg",
        genre:'Action/Sci-fi'
      },
      {
        name:'Transformer one',
        rating:7.6,
        director:'Josh Cooley',
        year:'2024',
        image:"https://images3.alphacoders.com/136/thumb-1920-1363121.jpeg",
        genre:'Action/Sci-fi'
      },
      {
        name:'Transformer one',
        rating:7.6,
        director:'Josh Cooley',
        year:'2024',
        image:"https://images3.alphacoders.com/136/thumb-1920-1363121.jpeg",
        genre:'Action/Sci-fi'
      }
    ]

    
  }


  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
}



}
