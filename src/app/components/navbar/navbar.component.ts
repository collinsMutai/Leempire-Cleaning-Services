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
  isMenuOpen = false; 
  isMobile = false; 

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768; 
  }

  ngOnInit() {
    this.onResize(); 
  }

  
  toggleMenu() {
    if (this.isMobile) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  
  navigateTo(page: string) {
    console.log(`Navigating to ${page}`);
    if (this.isMenuOpen) {
      this.isMenuOpen = false; 
    }

    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  }
}
