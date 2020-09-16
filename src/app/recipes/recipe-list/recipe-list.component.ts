import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() wasRecipeSelected=new EventEmitter<Recipe>();
  recipe: Recipe[] =[
   new Recipe("New Recipe 1","this is a new recipe","https://www.brandsynario.com/wp-content/uploads/Mirchilli.jpg"),
   new Recipe("New Recipe 2","this is a new recipe","https://media4.s-nbcnews.com/i/newscms/2019_05/1405957/elizabeth-heiskell-french-onion-sliders-main-190130_1960f6384ba7d2b7e12c5032c3e68ebe.jpg"),
   new Recipe("New Recipe 3","this is a new recipe","https://cdn.newsapi.com.au/image/v1/eebd8b9cf9b8414bc7fe9f1c3bcb863d?width=650")
  ]



 getData(recipe:Recipe){
this.wasRecipeSelected.emit(recipe);
 }
  constructor() { }

  ngOnInit() {
    
  }

}
