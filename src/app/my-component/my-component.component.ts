import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  name: string;

  constructor() {
    this.name = 'Tony';
  }
  sayMyName() {
   console.log('My name is', this.name);
  }

  ngOnInit() {
  }

}
