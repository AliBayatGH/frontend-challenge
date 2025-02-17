import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RecipeService } from './recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tetromize Coding Challenge';

  constructor(public recipeService: RecipeService) { }
}
