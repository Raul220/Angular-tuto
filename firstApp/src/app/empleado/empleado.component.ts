import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {

  name: String = "Joaquin";
  lastName = "Sanchez";
  private age = 41;
  company: String = "";
  disabledProperty= true;
  registeredProperty = false;
  registryText = "No hay nadie registrado.";

  test = "Google";

  setRegisterdUser = (event: Event) => {
    if ((<HTMLInputElement>event.target).value === 'si'){
      this.registryText = "Usuario Registrado.";
    } else {
      this.registryText = "No hay nadie registrado.";
    }
  };

  handleRegistered = () => this.registeredProperty = !this.registeredProperty;

  getAge = () =>  this.age;

  changeCompany = (c: String) => {
    this.company = c;
  }

  changeName = (n: String) => {
    this.name = n;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
