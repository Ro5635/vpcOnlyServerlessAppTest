import { Component, OnInit } from '@angular/core';
import { Cake } from "../Cake";

@Component({
  selector: 'app-cake-page',
  templateUrl: './cake-page.component.html',
  styleUrls: ['./cake-page.component.scss']
})
export class CakePageComponent implements OnInit {
  cakes: Cake[] = [];

  constructor() { }

  ngOnInit(): void {
    // Dummy cakes
    this.cakes = [
      {name: 'straw', sugar: 33, taste: 2},
      {name: 'apple', sugar: 23, taste: 1},
      {name: 'meat', sugar: 33, taste: 4},
      {name: 'toffee', sugar: 43, taste: 27}
    ]
  }



}
