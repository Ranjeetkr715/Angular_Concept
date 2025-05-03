import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,SignupComponent,ProfileComponent],
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
  value = 0;

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

/*     decrement(){
       this.value= this.value - 1;
      }

    reset(){
       this.value= 0;
      }

    increment(){
       this.value= this.value +1;
      } */

    handleCounter(val:string){
      if(val=='minus' && this.value>0){
        this.value= this.value - 1;
      }else if (val=='plus'){
        this.value= this.value +1;
      }else{
        this.value= 0;
       }
    }

  handleEvent(event :MouseEvent){
    console.log("Click event", event.type);
     console.log("Click event", (event.target as Element).classList);
      console.log("Click event " + (event.target as Element).className);
    }

   username ='';
   displayName : string= '';
   setName='';
    getValue(event:Event){
      const username = (event.target as HTMLInputElement).value;
      console.log(username);
      this.username=username;
    }

  showName(){
    //setName
    this.displayName=this.username;
   }

   setUserName(){
     //setName
     this.setName=this.username;
    }

    resetName(){
      //setName
      this.displayName='';
     }

   email : string='';

   getEmailValue(val:string){
     this.email=val;
     }

   setEmailDefault(){
     this.email='default@gmail.com';
     }

/*   if in angular 19 */
    displayimage =true;

   hiddenToggle(){
     this.displayimage= !this.displayimage;
     }

  /*   if-else in angular 19 */
    toggleColour= true
    colorChangeToggle(){
      this.toggleColour= !this.toggleColour;
      console.log(this.toggleColour)
      }
}
