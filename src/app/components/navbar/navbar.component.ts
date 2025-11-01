import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  activeLink = 'home';
  isMobile = false;
  private scrollTimeout: any;

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    // Debounce the scroll event
    this.scrollTimeout = setTimeout(() => {
      this.highlightCurrentSection();
    }, 100);  // Adjust the timeout as needed
  }

  ngOnInit() {
    this.onResize();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(page: string) {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeLink = page;
      this.isMenuOpen = false;
    }
  }

  setActive(link: string) {
    this.activeLink = link;
  }

  private highlightCurrentSection() {
    const sections = ['home', 'about', 'services', 'contact'];
    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Use the top property for more reliable results
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeLink = id;
          break;
        }
      }
    }
  }
}
