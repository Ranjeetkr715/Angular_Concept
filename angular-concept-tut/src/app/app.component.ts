import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-concept-tut';
  name:string = 'Ranjeet';
  data: string|number ="hello";
  other : any = true;
  x =10;
  y=20;
  user1 = 'Ranjeet';
  user2 = "Ranjeet";

  updateUsername(){
    let x = 30;
    this.name='Ranjeet Kumar';
    this.data=4321;
    this.other="abcd";
    console.log(x);
    console.log(this.name);
    console.log(this.data);
    console.log(this.other);
    }

  sum (a:number,b:number){
        console.log(a+b);
    }
}
