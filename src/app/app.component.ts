import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CodeSandbox';
  public number1: number = 0;
  public number2: number = 0;

  result: number = 0;

  Add() {
    this.result = this.number1 + this.number2;
  }

  Subtract() {
    if (this.number1 > this.number2) {
      this.result = this.number1 - this.number2;
    } else {
      this.result = this.number2 - this.number1;
    }
  }

  Multiply() {
    this.result = this.number1 * this.number2;
  }
  Divide() {
    this.result = this.number1 / this.number2;
  }
}
