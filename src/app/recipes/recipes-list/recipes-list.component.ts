import { Component, OnInit } from '@angular/core';
import { recipes } from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes:recipes []= [
    
    new recipes('Test Recipe','This is for testing','https://get.pxhere.com/photo/dish-food-recipe-fast-food-cuisine-garnish-snacks-vegetarian-food-power-supply-appetizer-tidbits-side-dish-arancini-hors-d-oeuvre-finger-food-rissole-croquette-fried-food-pakora-chicken-nugget-american-food-esfiha-kibe-vetkoek-1375826.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
