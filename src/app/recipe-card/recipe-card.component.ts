import { Component, Input } from '@angular/core';
import { Recipe, RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) { }

  saveRecipe(): void {
    this.recipeService.saveRecipe(this.recipe);
  }
}
