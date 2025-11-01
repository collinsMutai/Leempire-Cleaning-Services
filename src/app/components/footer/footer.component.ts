import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],  // You can leave it empty if no external modules are required
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],  // Corrected to styleUrls
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
