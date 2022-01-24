import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pVisible: boolean = false;
  clickLog: Date[] = [];

  onButtonClick = function () { 
    this.pVisible = !this.pVisible;  
    this.clickLog.push(new Date());
  }
}
