import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { CoreModule } from '../core/core.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PreviewComponent } from './preview/preview.component';

interface Genre {
  names: string;
  code: string;
}

interface languages {
  lng:string
}

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [PrimengModule,CoreModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss',
  providers:[DialogService]
})
export class AddmovieComponent implements OnInit {

  addMovie!:FormGroup;
  genres:Genre[];
  selectedCity:any;
  moviePosterUrl!:string;
  languages:languages[];
  ref: DynamicDialogRef | undefined;
  

  constructor(
    private fb:FormBuilder,
    public dialogService: DialogService

  ) {

    this.addMovie = this.fb.group({
      movieTitle:new FormControl('',[Validators.required]),
      Genre:new FormControl('',[Validators.required]),
      directorName:new FormControl('',[Validators.required]),
      year:new FormControl('',[Validators.required]),
      moviePoster:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      rating:new FormControl('',[Validators.required,this.numericValidator]),
      duration: new FormControl('', [Validators.required]),
      language: new FormControl('', [Validators.required]),
      trailerUrl: new FormControl('',[Validators.required]),
      videoUrl: new FormControl(''),
    })

     this.genres = [
      { names: 'Action', code: 'ACT' },
      { names: 'Adventure', code: 'ADV' },
      { names: 'Animation', code: 'ANI' },
      { names: 'Comedy', code: 'COM' },
      { names: 'Drama', code: 'DRA' },
      { names: 'Fantasy', code: 'FAN' },
      { names: 'Horror', code: 'HOR' },
      { names: 'Mystery', code: 'MYS' },
      { names: 'Romance', code: 'ROM' },
      { names: 'Sci-Fi', code: 'SCI' },
      { names: 'Thriller', code: 'THR' },
      { names: 'Crime', code: 'CRI' },
      { names: 'Documentary', code: 'DOC' },
      { names: 'Musical', code: 'MUS' },
      { names: 'Biography', code: 'BIO' },
      { names: 'Family', code: 'FAM' },
      { names: 'History', code: 'HIS' },
      { names: 'War', code: 'WAR' },
      { names: 'Western', code: 'WES' },
      { names: 'Sport', code: 'SPO' },
      { names: 'Music', code: 'MUS' },
      { names: 'Film Noir', code: 'NOI' },
      { names: 'Reality', code: 'REA' },
      { names: 'Short Film', code: 'SHF' }
    ];
    
    this.languages = [
        {lng: "Arabic"},
        {lng: "Bengali"},
        {lng: "English"},
        {lng: "French"},
        {lng: "German"},
        {lng: "Hindi"},
        {lng: "Italian"},
        {lng: "Japanese"},
        {lng: "Korean"},
        {lng: "Mandarin"},
        {lng: "Nigerian Pidgin"},
        {lng: "Portuguese"},
        {lng: "Russian"},
        {lng: "Spanish"},
        {lng: "Tamil"},
        {lng: "Telugu"}
      ];
  }

  ngOnInit(): void {

  }


  preview():void {
    this.ref = this.dialogService.open(PreviewComponent, {
      header: 'Movie details',
      width: '50vw',
      modal:true,
      breakpoints: {
          '960px': '75vw',
          '640px': '90vw'
      },
      data:this.addMovie.value
  });
    console.log('all values',this.addMovie.value)
  }

  submit():void {

    console.log('formvalue',this.addMovie.value)
  }

  numericValidator(control: any) {
    const value = control.value;
    const regex = /^[0-9]*$/;
    if (control.value && !regex.test(control.value)) {
      return { invalidNumber: true }; // Invalid number error
    }
    return null;
  }

  getUrl() {
    console.log('calling the function')
    console.log(this.addMovie.get('moviePoster'))
  }

}
