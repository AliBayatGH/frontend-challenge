import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent {
  savedRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
    this.savedRecipes = this.recipeService.getSavedRecipes();
  }

  removeRecipe(recipe: Recipe): void {
    this.recipeService.removeRecipe(recipe);
    this.savedRecipes = this.recipeService.getSavedRecipes();
  }
}