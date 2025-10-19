import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { OurStory } from './components/our-story/our-story';
import { OurTeam } from './components/our-team/our-team';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Home, OurStory,OurTeam],
  template: `
    <app-navbar></app-navbar>
    <app-home></app-home>
    <app-our-story></app-our-story>
    <app-our-team></app-our-team>
  `,
  styleUrls: ['./app.css']
})
export class App{
  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      let yOffset = -120; // default offset for navbar
      if (id === 'our-story') {
        yOffset = 10; // scroll slightly further down to avoid stopping at end of Home
      }
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
