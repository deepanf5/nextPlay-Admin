import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { CoreModule } from '../core/core.module';

interface Genre {
  name: string;
  code: string;
}

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [PrimengModule,CoreModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss'
})
export class AddmovieComponent implements OnInit {

  addMovie!:FormGroup;
  genres:Genre[];
  selectedCity:any;
  

  constructor(private fb:FormBuilder) {

    this.addMovie = this.fb.group({
      movieTitle:new FormControl('',[Validators.required]),
      directorName:new FormControl('',[Validators.required])
    })

     this.genres = [
      { name: 'Action', code: 'ACT' },
      { name: 'Adventure', code: 'ADV' },
      { name: 'Animation', code: 'ANI' },
      { name: 'Comedy', code: 'COM' },
      { name: 'Drama', code: 'DRA' },
      { name: 'Fantasy', code: 'FAN' },
      { name: 'Horror', code: 'HOR' },
      { name: 'Mystery', code: 'MYS' },
      { name: 'Romance', code: 'ROM' },
      { name: 'Sci-Fi', code: 'SCI' },
      { name: 'Thriller', code: 'THR' },
      { name: 'Crime', code: 'CRI' },
      { name: 'Documentary', code: 'DOC' },
      { name: 'Musical', code: 'MUS' },
      { name: 'Biography', code: 'BIO' },
      { name: 'Family', code: 'FAM' },
      { name: 'History', code: 'HIS' },
      { name: 'War', code: 'WAR' },
      { name: 'Western', code: 'WES' },
      { name: 'Sport', code: 'SPO' },
      { name: 'Music', code: 'MUS' },
      { name: 'Film Noir', code: 'NOI' },
      { name: 'Reality', code: 'REA' },
      { name: 'Short Film', code: 'SHF' }
    ];    

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
