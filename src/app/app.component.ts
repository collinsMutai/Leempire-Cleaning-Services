import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // corrected property name
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    // ✅ Set main SEO title once (optimized for Local SEO)
    this.titleService.setTitle(
      'LeEmpire Cleaning Services – Commercial Cleaning in Acworth, GA | Veteran-Owned'
    );

    // ✅ Send initial page view to Google Analytics 4
    if (typeof gtag === 'function') {
      gtag('config', 'G-16ETKE5VRT', {
        page_path: window.location.pathname,
      });
    }
  }
}
