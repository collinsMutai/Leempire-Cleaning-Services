import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  url: string;
  title: string;
  caption: string;
  alt: string;
  width?: number;
  height?: number;
}

@Component({
  selector: 'app-services-carousel',
  templateUrl: './services-carousel.component.html',
  styleUrls: ['./services-carousel.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ServicesCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('serviceCard') serviceCard: ElementRef | undefined;

  services: Service[] = [
    {
      url: 'assets/images/commercial-cleaning-acworth-ga.jpg',
      title: 'Commercial Cleaning',
      caption:
        'Professional commercial cleaning for offices, retail, and business spaces.',
      alt: 'Commercial cleaning service by LeEmpire Cleaning Services in Acworth, GA',
      width: 400,
      height: 300,
    },
    // Add additional services if needed
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('Services:', this.services);
  }

  ngAfterViewInit() {
    // Query all service cards after the view is initialized
    const serviceCards = document.querySelectorAll('.card');

    // Create an IntersectionObserver to observe when cards are in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          // Add 'in-view' class when the card is visible in the viewport
          if (entry.isIntersecting) {
            this.renderer.addClass(element, 'in-view');
          } else {
            this.renderer.removeClass(element, 'in-view');
          }
        });
      },
      {
        threshold: 0.5, // When 50% of the element is in view, trigger the observer
      }
    );

    // Observe each service card element
    serviceCards.forEach((card) => observer.observe(card));
  }
}
