import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false; // Track the state of the menu
  isMobile = false; // Flag for mobile detection

  // Listen to window resize to detect mobile devices
  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768; // Define mobile screen size
  }

  ngOnInit() {
    this.onResize(); // Check on initialization if the screen is mobile
  }

  // Toggle menu on mobile
  toggleMenu() {
    if (this.isMobile) {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open/close
    }
  }

  // Navigate to the specified section (smooth scrolling)
  navigateTo(page: string) {
    console.log(`Navigating to ${page}`);
    if (this.isMenuOpen) {
      this.isMenuOpen = false; // Close the menu when a link is clicked on mobile
    }

    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the section
    }
  }
}
