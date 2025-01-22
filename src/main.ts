import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

const routes = [
  {
    path: '',
    loadComponent: () => import('./app/recipe-list/recipe-list.component')
      .then(m => m.RecipeListComponent)
  },
  {
    path: 'my-recipes',
    loadComponent: () => import('./app/my-recipes/my-recipes.component')
      .then(m => m.MyRecipesComponent)
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
