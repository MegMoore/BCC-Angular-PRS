import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("About", "/about"),
    new Menu("Product", "/prod/list"),
    new Menu("Request", "/req/list"),
    new Menu("User", "/use/list"),
    new Menu("Vendor", "/vend/list"),
    new Menu("Login", "/use/login"),
    new Menu("Reviews", "/req/rev/list")
  ]
}
