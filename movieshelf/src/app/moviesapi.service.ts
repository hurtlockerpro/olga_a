import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from './IMovies';


@Injectable({
  providedIn: 'root'
})
export class MoviesapiService {

  apiKey = '22734c9df8a627b92d7f44c8d7356758'
  url:string = 'https://api.themoviedb.org/3/search/movie'
  query = '&query=Jack+Reacher'

  // genres /3/genre/movie/list?api_key=22734c9df8a627b92d7f44c8d7356758&language=en-US
  

  //  3/search/movie?api_key={api_key}&query=Jack+Reacher

  // /3/movie/popular?api_key=22734c9df8a627b92d7f44c8d7356758&language=en-US&page=1
  constructor(private httpClient:HttpClient) { }

  getUrl():string{
    return this.url + '?api_key=' + this.apiKey + this.query
  }

  getAllMovies():Observable<IMovies>{
    let response = this.httpClient.get<IMovies>(this.getUrl())
    //console.log(response)
    return response
  }

}
