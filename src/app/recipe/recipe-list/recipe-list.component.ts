import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../Recipe';

// Interfaz local opcional para ayudar a autocompletar (simplificada).
// En el parcial podrías definir todos los campos; dejamos sólo algunos
// relevantes para las cards.
interface RecipeItem {
  id: number;
  nombre?: string; // nombre en español
  imagen?: string; // URL de la imagen
  porciones?: number;
  tiempo_minutos?: number;
  // Campos alternativos en caso de que el JSON venga en inglés (robustez)
  name?: string;
  image?: string;
  servings?: number;
  time?: number;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  // Importo CommonModule para habilitar *ngIf y *ngFor
  imports: [CommonModule],
})
export class RecipeListComponent implements OnInit {
  // Arreglo que se llenará con el resultado del servicio.
  recipes: Recipe[] = [];
  // Indicador de carga para mostrar feedback si se quisiera.
  loading = false;
  // Variable para manejar errores simples (podrías mostrar un alert si quieres).
  error: string | null = null;

    /**
     * Calcula la cantidad de ingredientes de una receta.
     * Soporta tanto 'ingredientes' (español) como 'ingredients' (inglés).
     * @param r Receta
     * @returns número de ingredientes
     */
    getIngredientCount(r: any): number {
      if (Array.isArray(r.ingredientes)) return r.ingredientes.length;
      if (Array.isArray(r.ingredients)) return r.ingredients.length;
      return 0;
    }

  constructor(private recipeService: RecipeService, private router: Router) {}

  /**
   * ngOnInit:
   *  - Llama al servicio para obtener el listado remoto.
   *  - ¿Por qué en ngOnInit y no en constructor? Buenas prácticas: mantener
   *    el constructor liviano y disparar lógica de carga en el hook de ciclo
   *    de vida.
   */
  ngOnInit(): void {
    this.loading = true;
    this.recipeService.getRecipes().subscribe({
      next: (data: Recipe[]) => {
        this.recipes = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el listado de recetas';
        this.loading = false;
      },
    });
  }

  /**
   * Navega al detalle usando la ruta parametrizada '/recipe/:id'.
   * Mantiene la URL sincronizada con la vista y cumple el requerimiento
   * del punto 3 (botón dentro de cada card que lleva al detalle).
   */
  goToDetail(id: number): void {
    this.router.navigate(['/recipe', id]);
  }
}
