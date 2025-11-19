/**
 * RecipeService
 * ---------------------------------
 * Punto No. 1 (20%)
 * - Crear un servicio para consultar información de recetas (Recipe)
 *   desde fuentes externas (JSONs públicos en GitHub).
 * - Debe exponer:
 *   1) una función para LISTAR todas las recetas
 *   2) una función para consultar el DETALLE de una receta por id
 *
 * ¿Por qué un servicio?
 * - En Angular, los servicios encapsulan la lógica de acceso a datos
 *   (HTTP, almacenamiento, cache, etc.).
 * - Los componentes (lista y detalle) sólo se encargan de la UI y delegan
 *   el fetch de datos al servicio. Esto separa responsabilidades, reduce
 *   duplicación y facilita pruebas.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  // providedIn:'root' registra el servicio en el inyector raíz:
  //  - No necesitas declararlo en providers de ningún módulo
  //  - Se crea una única instancia compartida por toda la app
})
export class RecipeService {
  /**
   * URL para LISTAR recetas
   * (copiada exactamente del enunciado del parcial):
   *   https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json
   *
   * Consideraciones:
   * - Es un archivo JSON estático alojado en GitHub.
   * - Basta con HttpClient.get() sin headers especiales.
   */
  private readonly listUrl =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';

  /**
   * Base URL para el DETALLE de cada receta.
   * El patrón descrito en el enunciado es:
   *   <detailBase>/<id>/recipe.json
   *   Ej: .../2025-10%20Recetas/1/recipe.json
   */
  private readonly detailBaseUrl =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';

  /**
   * Inyectamos HttpClient (recuerda importar HttpClientModule en AppModule).
   */
  // Inyectamos HttpClient para peticiones HTTP
  constructor(private http: HttpClient) {}

  /**
   * getRecipes()
   *  - Llama al endpoint de LISTADO y devuelve un Observable con un arreglo de recetas.
   *  - Usamos `any[]` para tolerar diferencias de nombres de campos (es/en) en el JSON.
   *  - En un proyecto real, lo ideal es mapear los campos a una interfaz `Recipe`.
   */
  /**
   * Obtiene todas las recetas desde el JSON externo (enunciado).
   */
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.listUrl);
  }

  /**
   * getRecipe(id)
   *  - Construye la URL del detalle a partir del id y la base
   *    <detailBase>/<id>/recipe.json
   *  - Retorna un Observable con el detalle de la receta.
   */
  /**
   * Obtiene el detalle de una receta por id desde la URL externa.
   */
  getRecipe(id: number): Observable<any> {
    const url = `${this.detailBaseUrl}/${id}/recipe.json`;
    return this.http.get<any>(url);
  }
}
