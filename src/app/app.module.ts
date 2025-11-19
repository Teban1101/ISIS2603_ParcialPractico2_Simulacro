// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Habilita HttpClient en toda la app (para usar RecipeService, etc.)
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulo donde están los componentes de recetas (lista/detalle)
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  // Componentes que pertenecen a este módulo raíz
  declarations: [AppComponent],

  // Módulos que este módulo necesita
  imports: [
    BrowserModule,      // Requerido por apps web en Angular
    HttpClientModule,   // Importante: provee HttpClient para hacer peticiones HTTP
    AppRoutingModule,   // Registra las rutas definidas en app-routing.module.ts
    RecipeModule,       // Exporta componentes de recetas para usarlos/rutearlos
  ],

  // Servicios a nivel de módulo (aquí no es necesario porque RecipeService usa providedIn:'root')
  providers: [],

  // Componente raíz que se arranca al iniciar la app
  bootstrap: [AppComponent],
})
export class AppModule {}
