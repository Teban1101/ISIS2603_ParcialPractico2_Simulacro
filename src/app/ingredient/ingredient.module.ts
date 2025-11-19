import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

NgModule({
  // Como IngredientListComponent es standalone, lo importamos y exportamos
  imports: [CommonModule, IngredientListComponent],
  exports: [IngredientListComponent],
})
export class IngredientModule {}
