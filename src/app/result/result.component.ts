import { Component, Input } from '@angular/core';
// import { InputsComponent } from '../inputs/inputs.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  mostrarDatos: boolean = false;
  number1: number = 10;
  number2: number = 20;
}
