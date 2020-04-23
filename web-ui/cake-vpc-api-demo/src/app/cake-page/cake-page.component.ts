import { Component, OnInit } from '@angular/core';
import { Cake } from "../Cake";
import { CakeService } from "../cake.service";

@Component({
  selector: 'app-cake-page',
  templateUrl: './cake-page.component.html',
  styleUrls: ['./cake-page.component.scss']
})
export class CakePageComponent implements OnInit {
  cakes: Cake[];

  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {
    this.cakeService.getCakes().subscribe(cakes => {
      this.cakes = cakes;
    })
  }



}
