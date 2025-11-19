import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientListComponent } from '../ingredient/ingredient-list/ingredient-list.component';

@NgModule({
  // Importamos CommonModule y los componentes standalone directamente
  imports: [
    CommonModule,
    RecipeListComponent,
    RecipeDetailComponent,
    IngredientListComponent
  ],
  // Exportamos los componentes para que puedan usarse en otros módulos
  exports: [RecipeListComponent, RecipeDetailComponent, IngredientListComponent],
})
export class RecipeModule {}
