import { Component, inject } from '@angular/core';
import { App } from '../../app'; // path to App component

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  private app = inject(App);

  scrollToSection(sectionId: string) {
    this.app.scrollToElement(sectionId);
  }
}
