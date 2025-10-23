import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class Faq {
  constructor(private el: ElementRef) {}

  scrollToFaq(): void {
    const element = this.el.nativeElement.querySelector('#faq');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}