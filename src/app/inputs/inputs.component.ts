import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent {
  number1: number = 0;
  number2: number = 0;

  resultado: number = 0;

  onSumar(): void {
    this.resultado = this.number1 + this.number2;
  }
}
