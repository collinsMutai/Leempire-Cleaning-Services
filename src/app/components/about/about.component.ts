import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
})
export class AboutComponent implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const element = document.getElementById('about-section');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  }
}
