import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Dinuguan',
      'Masarap siya!',
      'https://www.lutongbahayrecipe.com/wp-content/uploads/2019/02/lutong-bahay-dinuguan-1-1200x755.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  
  getRecipes = () => [...this.recipes];

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}