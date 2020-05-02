import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  @Output() recipeClicked = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.subscription = this.recipesService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });

    this.recipes = this.recipesService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
