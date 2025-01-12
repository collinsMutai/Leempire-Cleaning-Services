import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  navigateTo(page: string) {
    console.log(`Navigating to ${page}`);

    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
