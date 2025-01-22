import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Recipe, RecipeService } from '../recipe.service';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeCardComponent,
    HighlightDirective
  ],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  searchControl = new FormControl();
  loading = true;
  error: string | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (data) => {
        this.recipes = data;
        this.filteredRecipes = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load recipes';
        this.loading = false;
      }
    });

    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(value.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(value.toLowerCase()))
      );
    });
  }
}