export class Ingredient {
  // Campos base en español (según dataset local)
  nombre: string;
  cantidad: string;
  unidad: string;
  // Campos alternativos en inglés para tolerar JSON externo si cambia
  // (Punto 3: robustez en las templates evitando errores undefined)
  name?: string;
  quantity?: string;
  unit?: string;

  constructor(nombre: string, cantidad: string, unidad: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.unidad = unidad;
  }
}
