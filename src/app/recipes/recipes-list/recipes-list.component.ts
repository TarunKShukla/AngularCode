import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('Test recipe','this is test description','http://maxpixel.freegreatpicture.com/static/photo/1x/Struffoli-Meal-Food-Sweet-Typical-Sweet-Recipe-647314.jpg'),
  new Recipe('Test recipe','this is test description','https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjPvcmqvs3XAhUeSo8KHUiwAzkQjRwIBw&url=https%3A%2F%2Fiambaker.net%2Fchristmas-cookies-cookie-recipe%2F&psig=AOvVaw0bVi37G7HhtSVAvM3HM4Fv&ust=1511278776678996')
];
  constructor() { }

  ngOnInit() {
  }

}
