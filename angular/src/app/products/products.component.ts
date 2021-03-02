import { AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit {

  products:string[] = [ "product 1", "product 2", "product 3"]

  isTrue:boolean = false
  count:number = 10

  childProductTotal:number = 1

  @Input() productDescription:string = "default child description"
  

  constructor() { 
    console.log(' this is constructor')
  }

  ngOnInit(): void {
    console.log(' this is ngOnInit')
  }

  ngOnDestroy(): void {
    console.log(' this is ngOnDestroy')
  }

  ngDoCheck(): void {
    console.log(' this is ngDoCheck')
  }

  ngAfterViewInit(): void{
    console.log(' this is ngAfterViewInit')
  }

  changeVisibility(){
    this.isTrue = !this.isTrue
  }

  increment():void{
    this.count++
  }

  decrement():void{
    this.count--
  }


  incrementProductTotal(){
    this.childProductTotal++
  }
  decrementProductTotal(){
    this.childProductTotal--
  }

  addProductToBasket($event:any){
    this.products.push("product " + (this.products.length + 1))
    console.log($event)
  }

}
