import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { OurStory } from './components/our-story/our-story';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'our-story', component: OurStory },
  { path: 'faq', component: Home }, // Placeholder
  { path: 'contact', component: Home }, // Placeholder
];
