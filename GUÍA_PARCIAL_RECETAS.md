# Guía Completa Parcial Práctico Recetas Uniandes

## 1. Estructura del Proyecto
- **src/app/**: Carpeta principal de la app Angular.
  - **app.component.html / app.component.ts**: Componente raíz. Debe contener `<router-outlet>` para habilitar navegación.
  - **app-routing.module.ts**: Define las rutas principales (`/recipe`, `/recipe/:id`).
  - **recipe/**: Módulo de recetas.
    - **recipe-list/**: Lista de recetas.
      - `recipe-list.component.ts`: Lógica para mostrar todas las recetas y navegar al detalle.
      - `recipe-list.component.html`: Maquetación con Bootstrap, cards y botón de navegación.
    - **recipe-detail/**: Detalle de receta.
      - `recipe-detail.component.ts`: Lógica para leer el id de la URL y cargar la receta.
      - `recipe-detail.component.html`: Maquetación del detalle, ingrediente más usado, pasos, botón volver.
    - `recipe.service.ts`: Servicio que obtiene las recetas (por HTTP o local).
    - `Recipe.ts`: Modelo de receta.
    - `recipeData.ts`: Datos locales de ejemplo.
  - **ingredient/**: Módulo de ingredientes.
    - `Ingredient.ts`: Modelo de ingrediente.
    - `ingredient-list/ingredient-list.component.ts/html`: Lista de ingredientes para cada receta.

## 2. Instalación y Configuración
- Instala dependencias:
  ```bash
  npm install
  ```
- Instala Bootstrap:
  ```bash
  npm install bootstrap
  ```
- Asegúrate de importar Bootstrap en `angular.json`:
  ```json
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ]
  ```

## 3. Navegación y Routing
- El archivo clave es `app-routing.module.ts`.
  - `/recipe`: Muestra la lista de recetas.
  - `/recipe/:id`: Muestra el detalle de la receta seleccionada.
- El componente raíz (`app.component.html`) debe tener solo `<router-outlet>`.

## 4. Lógica de Componentes
- **Lista de recetas**:
  - `recipe-list.component.ts` llama al servicio y muestra las recetas.
  - Usa el método `goToDetail(id)` para navegar al detalle.
  - Muestra cantidad de ingredientes calculada.
- **Detalle de receta**:
  - `recipe-detail.component.ts` lee el parámetro `id` de la URL y busca la receta en el servicio.
  - Muestra el ingrediente más usado, lista de ingredientes y pasos.
  - Botón para regresar a la lista.

## 5. Servicio de Recetas
- `recipe.service.ts` debe usar `HttpClient` para obtener los datos (o local si no hay endpoint).
- El método `getRecipes()` retorna un Observable con el arreglo de recetas.

## 6. Errores Comunes y Soluciones
- **No navega al detalle**: Verifica que `app.component.html` tenga `<router-outlet>`, no `<app-recipe-list>`.
- **No carga la receta en el detalle**: Asegúrate de usar `ActivatedRoute` y buscar la receta por id en el servicio.
- **Bootstrap no se aplica**: Revisa que esté en `angular.json` y que el paquete esté instalado.
- **Campos vacíos o errores de datos**: Usa acceso robusto en los templates (`r.nombre || r.name`).
- **No se muestran ingredientes/pasos**: Verifica que el modelo y los datos tengan los campos correctos.

## 7. Archivos Clave para Revisar
- `src/app/app.component.html` (router outlet)
- `src/app/app-routing.module.ts` (rutas)
- `src/app/recipe/recipe-list/recipe-list.component.ts/html` (listado y navegación)
- `src/app/recipe/recipe-detail/recipe-detail.component.ts/html` (detalle y lógica de carga)
- `src/app/recipe/recipe.service.ts` (servicio de datos)
- `src/app/recipe/Recipe.ts` (modelo)
- `angular.json` (Bootstrap)

## 8. Resumen de los 4 puntos del parcial

### 1. Listar recetas en cards (Bootstrap)
- **Archivos clave:**
  - `src/app/recipe/recipe-list/recipe-list.component.ts`
  - `src/app/recipe/recipe-list/recipe-list.component.html`
- **¿Qué se hizo?**
  - Se muestran todas las recetas en formato card usando Bootstrap.
  - Cada card tiene imagen, nombre, porciones, tiempo y botón para ver detalle.

### 2. Navegación entre vistas (Routing)
- **Archivos clave:**
  - `src/app/app-routing.module.ts`
  - `src/app/app.component.html`
- **¿Qué se hizo?**
  - Se definieron dos rutas principales: `/recipe` (lista) y `/recipe/:id` (detalle).
  - Se usa `<router-outlet>` para que la vista cambie según la ruta.

### 3. Detalle de receta con información completa
- **Archivos clave:**
  - `src/app/recipe/recipe-detail/recipe-detail.component.ts`
  - `src/app/recipe/recipe-detail/recipe-detail.component.html`
- **¿Qué se hizo?**
  - Al hacer clic en una receta, se navega al detalle usando el id de la receta.
  - Se muestra toda la información: imagen, nombre, porciones, tiempo, dificultad, tipo, ingredientes, pasos y botón para volver.
  - El componente busca la receta por id usando el servicio.

### 4. Información calculada (cantidad y más usado)
- **Archivos clave:**
  - `src/app/recipe/recipe-list/recipe-list.component.ts` (cantidad de ingredientes)
  - `src/app/recipe/recipe-detail/recipe-detail.component.ts` (ingrediente más usado)
- **¿Qué se hizo?**
  - En la lista, se muestra la cantidad de ingredientes de cada receta.
  - En el detalle, se calcula y muestra el ingrediente que más cantidad requiere.

---
Lee estos archivos para entender cada punto y cómo se resolvió. ¡Así tendrás todo claro para el parcial!
