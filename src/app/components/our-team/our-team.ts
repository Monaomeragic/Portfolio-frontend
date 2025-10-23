import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.html',
  styleUrls: ['./our-team.css']
})
export class OurTeam implements AfterViewInit {
  @ViewChild('teamScrollContainer', { static: false }) teamScrollContainer!: ElementRef;

  ngAfterViewInit() {}

  scrollTeam(direction: number) {
    if (this.teamScrollContainer) {
      const container: HTMLElement = this.teamScrollContainer.nativeElement;
      const page = container.querySelector('.team-page') as HTMLElement;
      if (page) {
        const scrollAmount = page.offsetWidth; // scroll by one page width
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
