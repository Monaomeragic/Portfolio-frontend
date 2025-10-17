import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'our-story', component: Home }, // Placeholder, can be replaced with actual component
  { path: 'faq', component: Home }, // Placeholder
  { path: 'contact', component: Home }, // Placeholder
];
