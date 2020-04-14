import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe('', '', '', []);
  id: number;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.recipe = this.recipesService.getSelectedRecipe()
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }

  addRecipeIngredients() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
