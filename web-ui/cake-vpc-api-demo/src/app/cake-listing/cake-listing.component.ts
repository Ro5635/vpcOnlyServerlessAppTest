import {Component, Input, OnInit} from '@angular/core';
import { Cake } from "../Cake";

@Component({
  selector: 'app-cake-listing',
  templateUrl: './cake-listing.component.html',
  styleUrls: ['./cake-listing.component.scss']
})
export class CakeListingComponent implements OnInit {
  @Input() cakes: Cake[];

  constructor() { }

  ngOnInit(): void {
  }

}
