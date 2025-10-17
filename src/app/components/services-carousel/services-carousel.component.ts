import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
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
      url: 'assets/images/residential-cleaning-acworth-georgia.jpg',
      title: 'House Cleaning',
      caption: 'Reliable and thorough house cleaning for homes in Acworth, GA and nearby areas.',
      alt: 'House cleaning service by LeEmpire Cleaning Services in Acworth, GA',
      width: 400,
      height: 300,
    },
    {
      url: 'assets/images/move-out-cleaning-acworth.jpg',
      title: 'Move-Out Cleaning',
      caption: 'Comprehensive move-out cleaning to get your home ready for the next occupant.',
      alt: 'Move-out cleaning service by LeEmpire Cleaning Services in Acworth, GA',
      width: 400,
      height: 300,
    },
    {
      url: 'assets/images/residential-commercial-cleaning-acworth-ga.jpg',
      title: 'Commercial Cleaning',
      caption: 'Professional commercial cleaning for offices, retail, and business spaces.',
      alt: 'Commercial cleaning service by LeEmpire Cleaning Services in Acworth, GA',
      width: 400,
      height: 300,
    },
    {
      url: 'assets/images/eco-friendly-cleaning-acworth-ga.jpg',
      title: 'Eco-Friendly Cleaning',
      caption: 'Use green and sustainable cleaning methods to protect your space and health.',
      alt: 'Eco-friendly cleaning service by LeEmpire Cleaning Services in Acworth, GA',
      width: 400,
      height: 300,
    },
    {
      url: 'assets/images/maid-service-acworth.jpg',
      title: 'Maid Service',
      caption: 'Regular maid service plans for homes and offices in the Acworth area.',
      alt: 'Maid service by LeEmpire Cleaning Services in Acworth, GA',
      width: 400,
      height: 300,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('Services:', this.services);
  }

  ngAfterViewInit() {
    const serviceCards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('in-view');
          } else {
            element.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    serviceCards.forEach((card) => observer.observe(card));
  }
}
