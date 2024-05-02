import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

type Recipe = {
  title: string,
  description: string,
  tags: Array<string>
}

@Component({
  selector: 'app-salgadas',
  templateUrl: './salgadas.component.html',
  styleUrls: ['./salgadas.component.scss']
})
export class SalgadasComponent {

  public tagColor = 'primary';

  public recipes: Array<Recipe> = [
    {
      title: "Receita A",
      description: "Uma descrição para receita.",
      tags: [
        'salgado',
        'rápido'
      ]
    },
    {
      title: "Receita B",
      description: "Uma descrição para receita.",
      tags: [
        'salgado',
        'demorado'
      ]
    },
    {
      title: "Receita C",
      description: "Uma descrição para receita.",
      tags: [
        'salgado',
      ]
    },
    {
      title: "Receita D",
      description: "Uma descrição para receita.",
      tags: [
        'salgado',
        'gelado'
      ]
    },
    {
      title: "Receita E",
      description: "Uma descrição para receita.",
      tags: [
        'salgado',
        'quente'
      ]
    },
    {
      title: "Receita F",
      description: "Uma descrição para receita.",
      tags: [
        'salgado',
        'caldo'
      ]
    }
  ];

}
