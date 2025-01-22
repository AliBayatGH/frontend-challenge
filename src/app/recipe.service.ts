import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesUrl = 'assets/recipes.json';
  private savedRecipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  saveRecipe(recipe: Recipe): void {
    this.savedRecipes.push(recipe);
  }

  getSavedRecipes(): Recipe[] {
    return this.savedRecipes;
  }

  removeRecipe(recipe: Recipe): void {
    this.savedRecipes = this.savedRecipes.filter(r => r.id !== recipe.id);
  }
}