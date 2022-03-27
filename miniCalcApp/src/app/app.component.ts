import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  operation = '';
  inputValue = '';

  handleInput = (event:Event) => {
    // debugger;
    let val = (<HTMLInputElement>event.target).value;
    let lastChar = val.slice(-1);
    if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/'){
      this.operation = lastChar;
    } else if (lastChar === '=') {
      let numbers: any = val.split(this.operation);
      const a = parseInt(numbers[0]);   
      const b = parseInt(numbers[1].slice(0, numbers[1].length - 1));
      if(this.operation === '+') this.inputValue = (a+b).toString();
      if(this.operation === '-') this.inputValue = (a-b).toString();
      if(this.operation === '*') this.inputValue = (a*b).toString();
      if(this.operation === '/') this.inputValue = (a/b).toString();         
    }    
  }
}
