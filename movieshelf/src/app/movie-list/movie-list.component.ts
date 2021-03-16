import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { IMovies } from '../IMovies'
import { MoviesapiService } from '../moviesapi.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies:IMovies = {}

  constructor(private moviesService:MoviesapiService, ) { }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((data) => {
      
      console.log(data.results)
      this.movies = data
    })
  }

}
