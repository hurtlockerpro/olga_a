import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movieID:number  = 0

  constructor(private _router:Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe( (urlParams:ParamMap) => {
      this.movieID = parseInt(urlParams.get('id')!)
    })
  }

  openMovieList():void{
    this._router.navigate(['movies']) //, { relativeTo: this._activatedRoute })
  }

}
