import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModule } from '../../primeng/primeng.module';
import { DatePipe } from '@angular/common';



interface Movies {
    movieTitle:string
    Genre:any
    directorName:string
    year: string,
    moviePoster:string,
    description:string,
    rating:string,
    duration: string,
    language: string,
    trailerUrl:string,
    videoUrl:string
}

@Component({
  selector: 'M-preview',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  providers:[DatePipe]
})
export class PreviewComponent {

  instance:any;
  movieDetails:Movies | undefined;
  formattedYear:any;
  value!:any
  

  constructor(
    public ref: DynamicDialogRef,
    private dialogService: DialogService,
    private datePipe: DatePipe
  ) {
    this.instance = this.dialogService.getInstance(this.ref);
}

ngOnInit() {
    if (this.instance && this.instance.data) {
      this.movieDetails = this.instance.data;
      this.formattedYear = this.datePipe.transform(this.movieDetails?.year, 'yyyy');
      this.value = this.movieDetails?.rating
      
    }
}

}
