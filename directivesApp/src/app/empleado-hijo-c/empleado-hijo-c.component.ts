import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {
  @Input() elList:any;
  @Input() index:number;
  

  constructor() { }

  ngOnInit(): void {
  }

  array= [''];

  agergarCaracteristica(nuevaCaracteristica: string){
    console.log(nuevaCaracteristica);
    this.array.push(nuevaCaracteristica);
  }

}
