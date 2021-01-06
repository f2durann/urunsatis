import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "KATEGORİ LİSTESİ";
  categories: Category[] = [
    { id: 1, name: "Elektronik" },
    { id: 1, name: "Bilgisayar" },
    { id: 1, name: "İletişim" },
    { id: 1, name: "Müzik" },
    { id: 1, name: "İçecek" },
  ]
  ngOnInit() {
  }

}
