
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { IngredientListComponent } from '../../ingredient/ingredient-list/ingredient-list.component';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  // Importo CommonModule y el componente IngredientListComponent
  imports: [CommonModule, IngredientListComponent],
})
export class RecipeDetailComponent implements OnInit {
  recipe: any = null;
  loading = true;
  error: string | null = null;

  /**
   * Calcula el ingrediente con la mayor cantidad necesaria para la receta.
   * Ignora las unidades, solo compara el valor numérico de cantidad.
   * Soporta tanto 'ingredientes' (español) como 'ingredients' (inglés).
   * @returns nombre del ingrediente más usado
   */
  /**
   * Calcula el ingrediente con la mayor cantidad necesaria para la receta.
   * Ignora las unidades, solo compara el valor numérico de cantidad.
   * Soporta tanto 'ingredientes' (español) como 'ingredients' (inglés).
   * @returns nombre del ingrediente más usado
   */
  getMostUsedIngredient(): string | null {
    const arr = this.recipe?.ingredientes || [];
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let max = -Infinity;
    let nombre = null;
    arr.forEach((ing: any) => {
      let cantidad = ing.cantidad;
      let num = typeof cantidad === 'string' ? parseFloat(cantidad) : Number(cantidad);
      if (!isNaN(num) && num > max) {
        max = num;
        nombre = ing.nombre;
      }
    });
    return nombre;
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  /**
   * ngOnInit:
   *  - Lee el parámetro 'id' de la URL.
   *  - Usa el servicio para buscar la receta por id.
   *  - Maneja estados de carga y error.
   */
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      this.error = 'ID de receta inválido';
      this.loading = false;
      return;
    }
    this.recipeService.getRecipes().subscribe({
      next: (recipes: any[]) => {
        this.recipe = recipes.find(r => r.id === id);
        if (!this.recipe) {
          this.error = 'Receta no encontrada';
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar la receta';
        this.loading = false;
      }
    });
  }
}
