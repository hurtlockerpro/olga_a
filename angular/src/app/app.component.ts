import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root2222',
  templateUrl: './app.component.html',
  /*template:`
  <h1>Hello from template</h1>
  <h1>Hello from template</h1>
  <h1>Hello from template</h1>
  <h1>Hello from template</h1>
  `,*/
  styleUrls: ['./app.component.scss']
  //styles:[`h1,h2{ color: green; }`]
})
export class AppComponent {
  title = 'Vladimir';
  firstname:string = "Vladimir";
  lastname:string = "Kjahrenov";
  result:number = 0;

  parentProductTitle:string = "This is product form parent"
  productDescription:string = "Default description"

  isGreen = false



  showAlert(firstname: string):void{
    alert('Hello from button click. ' + firstname)
  }


  increment():void{
    this.result++
  }

  decrement($event: any):void{
    
    if ($event.ctrlKey == true) this.result--
    else alert("Press CTRL key on keyboard")

    console.log($event)
  }

  changeColor():void{
    this.isGreen = !this.isGreen
  }

  public showProductsComponent = true
  updateChild(){
      this.showProductsComponent = !this.showProductsComponent
  } 
}
