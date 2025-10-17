import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar'; // ✅ correct path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar], // ✅ this is what shows <app-navbar>
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App{}