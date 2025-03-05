import { Component, OnInit } from '@angular/core';
import { AheaderComponent } from './aheader/aheader.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { CoreModule } from '../core/core.module';
import { PrimengModule } from '../primeng/primeng.module';
import { ChartModule } from 'primeng/chart';
import { Tooltip } from 'chart.js/dist/plugins/plugin.tooltip';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PrimengModule,ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  movies:any = [];

  first: number = 0;
  rows: number = 10;
  basicData:any;
  options:any
  
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


    // chart data 

    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  type: 'bar',
                  label: 'Dataset 1',
                  backgroundColor: ['rgba(95, 158, 160, 0.65)','rgba(95, 158, 160, 1)','rgba(95, 158, 160, 1),rgba(95, 158, 160, 1)'],
                  borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  data: [50, 25, 12, 48, 90, 76, 42],
                  borderRadius:10
              },
              {
                  type: 'bar',
                  label: 'Dataset 2',
                  backgroundColor: ['rgba(95, 158, 160, 0.65)','rgba(95, 158, 160, 1)','rgba(95, 158, 160, 1),rgba(95, 158, 160, 1)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  // backgroundColor: documentStyle.getPropertyValue('--green-600'),
                  data: [21, 84, 24, 75, 37, 65, 34],
                  borderRadius:10
              },
              {
                  type: 'bar',
                  label: 'Dataset 3',
                  backgroundColor: ['rgba(95, 158, 160, 0.89)','rgba(95, 158, 160, 0.79)','rgba(95, 158, 160, 0.66),rgba(95, 158, 160, 0.75)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                  // backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                  data: [41, 52, 24, 74, 23, 21, 32],
                  borderRadius:10
              }
          ]
      };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              tooltip: {
                  mode: 'index',
                  intersect: false
              },
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  stacked: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false,
                      display:false
                  }
              },
              y: {
                  stacked: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false,
                  }
              }
          }
      };

    
  }


  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
}



}
