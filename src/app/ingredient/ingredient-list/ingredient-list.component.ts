import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../Ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'], // Corrección: styleUrls debe ser array
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];
  constructor() {}

  ngOnInit(): void {}
}
