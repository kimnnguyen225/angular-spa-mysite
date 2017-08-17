import { Component, OnInit } from '@angular/core';

@Component({
  // selector can have any name but must have dash in it
  selector: 'menu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
