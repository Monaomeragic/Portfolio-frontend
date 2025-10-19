import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  activeLink: string = '';

  isActive(route: string): boolean {
    return this.activeLink === route;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Prevent any default behavior
      event?.preventDefault();

      // Use scrollIntoView with a small delay to ensure rendering is complete
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // After scrolling, adjust for navbar height
        setTimeout(() => {
          window.scrollBy({
            top: -80,
            behavior: 'smooth',
          });
        }, 100);
      }, 0);
    }
  }
}
