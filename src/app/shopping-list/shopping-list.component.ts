import { Component, OnInit } from '@angular/core';
import {Ingrdient} from '../shared/ingrdient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrdients :Ingrdient[]=[
new Ingrdient('Potata',6),new Ingrdient('Babycorn',5)
];
  constructor() { }

  ngOnInit() {
  }

}
