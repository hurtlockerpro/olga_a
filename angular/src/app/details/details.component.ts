import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() productTitle:string = "this is child product title"
  @Input() productTotal:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onChangeFromChild = new EventEmitter()
  addProductToBasket(isChanged: boolean){
    this.onChangeFromChild.emit(isChanged)
  }
  

}
