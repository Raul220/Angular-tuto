import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Directives';
  message = '';
  name: string = '';
  lastName: string = '';
  position: string = '';
  registreted = false;
  entries: Array<any>;

  constructor() {
    this.entries = [
      {title: 'Title-1'},
      {title: 'Title-2'},
      {title: 'Title-3'},
      {title: 'Title-4'},
      {title: 'Title-5'},
      {title: 'Title-6'},
    ]
  }

  handlesubmit = () => {
    
    this.message = this.name !== '' && this.lastName !== '' ? `${this.position} ${this.name} ${this.lastName} was registreted` :
    'Fill all the Fields';
    this.registreted = true;
  };
}
