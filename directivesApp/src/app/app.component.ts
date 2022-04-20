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
      {name: 'Ramon', lastName: 'Rodriguez', position: 'director'},
      {name: 'Raul', lastName: 'Perez', position: 'admin'},
      {name: 'Fredo', lastName: 'Corleone', position: 'indio'},
      {name: 'Alex', lastName: 'De la Iglesia', position: 'Botones'},
    ]
  }

  handlesubmit = () => {    
    this.message = this.name !== '' && this.lastName !== '' ? `${this.position} ${this.name} ${this.lastName} was registreted` :
    'Fill all the Fields';
    this.registreted = true;
    let employ = {name: this.name, lastName: this.lastName, position: this.position};
    this.entries.push(employ);
  };
}
