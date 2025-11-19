import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importamos los componentes que se asignarán como vistas de las rutas
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';

/**
 * AppRoutingModule
 * ------------------------------
 * Punto 2: Definir dos rutas principales
 *  - '/recipe'      → muestra el listado de recetas
 *  - '/recipe/:id'  → muestra el detalle de una receta específica
 * Además, se redirige la ruta vacía '' hacia '/recipe' para que al cargar
 * la app se vea directamente el listado.
 */
const routes: Routes = [
  // Listar recetas
  { path: 'recipe', component: RecipeListComponent },

  // Detalle de receta: el parámetro `:id` se leerá con ActivatedRoute
  { path: 'recipe/:id', component: RecipeDetailComponent },

  // Redirección por defecto
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
