import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe('', '', '', []);

  constructor(private recipesService: RecipesService, private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    // this.recipe = this.recipesService.getSelectedRecipe()
  }

  addRecipeIngredients() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
