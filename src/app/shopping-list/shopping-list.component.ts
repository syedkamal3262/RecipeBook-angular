import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

public ingredient: Ingredient[]=[
  new Ingredient("Tomatos",5),
  new Ingredient("Potatos",5)
]
  constructor() { }

  ngOnInit() {
  }
  addedIngredient(ingredient:Ingredient){
 this.ingredient.push(ingredient);
  }

}
