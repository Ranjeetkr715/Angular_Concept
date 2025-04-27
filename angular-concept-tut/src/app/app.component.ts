import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-concept-tut';
  name = 'Ranjeet Kumar';
  x =10;
  y=20;
  user1 = 'Ranjeet';
  user2 = "Ranjeet";
}
