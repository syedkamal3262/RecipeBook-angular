import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addShoppingList= new EventEmitter<Ingredient>()
  addItems(nameInput,amoutInput){
    const newIngredient= new Ingredient(nameInput,amoutInput)
    this.addShoppingList.emit(newIngredient);
  }
  constructor() { }

  ngOnInit() {
  }

}
