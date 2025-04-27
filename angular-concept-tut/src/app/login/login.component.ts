import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  handleClickEvent(){
    alert("function called");
    console.log("print function called")
    this.otherClickEvent();
    }

    otherClickEvent(){
      alert("reset button");
      console.log("reset the data")
      }

}
