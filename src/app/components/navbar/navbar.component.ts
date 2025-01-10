import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Add any other necessary imports here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // Property to toggle the visibility of the navbar links
  isMenuOpen: boolean = false;

  // Method to toggle the 'isMenuOpen' property when the hamburger is clicked
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
