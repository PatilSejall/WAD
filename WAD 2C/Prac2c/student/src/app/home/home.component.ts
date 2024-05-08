import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router)
  {

  }

  regbtn(){
    this.router.navigate(['/register']);

  }
  logbtn(){
    this.router.navigate(['/login']);
  }
  showbtn(){
    this.router.navigate(['/showuser']);
  }

}
