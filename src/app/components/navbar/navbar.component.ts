import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(page: string) {
    console.log(`Navigating to ${page}`);

    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
