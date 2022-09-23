import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listCategories: String[]= ['Escritorios', 'Descanso', 'Ergonomia', 'Tu Salud', 'Chilaquiles para llevar'];
  constructor() { }

  ngOnInit(): void {
  }

}
