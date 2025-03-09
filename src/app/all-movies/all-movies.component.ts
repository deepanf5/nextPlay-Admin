import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { Table } from 'primeng/table';

interface Movies {
  name:string,
  rating:number,
  director:string,
  year:string,
  image:string,
  genre:string
}

@Component({
  selector: 'app-all-movies',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './all-movies.component.html',
  styleUrl: './all-movies.component.scss'
})
export class AllMoviesComponent  implements OnInit{

  movies!:Movies[];
  loading: boolean = true;
  searchValue!: string;

  ngOnInit(): void {
    this.movies = [
      {
        name:'Birds of Prey and the Fantabulous Emancipation of One Harley Quinn',
        rating:3.0,
        director:'Cathy Yan',
        year:'2020',
        image:"https://wallpapers.com/images/high/birds-of-prey-quality-harley-photograph-v7jqp0xxf0qh00aj.webp",
        genre:'Action/Comdey'
      },
      {
        name:'Mufasa: The Lion King',
        rating:3.7,
        director:'Barry Jenkins',
        year:'2024',
        image:"https://4kwallpapers.com/images/walls/thumbs_3t/16612.jpg",
        genre:'Adventure/Drama'

      },
      {
        name:'Wall E',
        rating:4.4,
        director:'Andrew Stanton',
        year:'2008',
        image:"https://images.alphacoders.com/136/thumb-440-1363724.webp",
        genre:'Family/Sci-fi '
      },
      {
        name:'Wolverine & Dead pool',
        rating:3.6,
        director:'Shawn Levy',
        year:'2024',
        image:"https://images3.alphacoders.com/138/thumb-1920-1388592.jpg",
        genre:'Action/Comedy'
      },
      {
        name:'Transformer one',
        rating:3.6,
        director:'Josh Cooley',
        year:'2024',
        image:"https://images3.alphacoders.com/136/thumb-1920-1363121.jpeg",
        genre:'Action/Sci-fi'
      },
      {
        name:'Transformer one',
        rating:3.6,
        director:'Josh Cooley',
        year:'2024',
        image:"https://images3.alphacoders.com/136/thumb-1920-1363121.jpeg",
        genre:'Action/Sci-fi'
      },
      {
        name:'Transformer one',
        rating:3.6,
        director:'Josh Cooley',
        year:'2024',
        image:"https://images3.alphacoders.com/136/thumb-1920-1363121.jpeg",
        genre:'Action/Sci-fi'
      },
      
    ]
  
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
}


  

}
