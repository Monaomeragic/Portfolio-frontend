import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,   
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  activeLink: string = '';

  isActive(route: string): boolean {
    return this.activeLink === route;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = 10; // height of navbar + padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}