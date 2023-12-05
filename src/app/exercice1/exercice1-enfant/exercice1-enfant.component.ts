import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  value: number = 0;
  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  newValue() {
    console.log(this.value);
  }

  incrementer() {
    this.value = this.value+1;
    this.changeValue.emit({
      result: this.value
    });
    this.newValue();
  }


  decrementer() {
    this.value = this.value-1;
    this.changeValue.emit({
      result: this.value
    });
    this.newValue();
  }

}
