import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-carousel',
  templateUrl: './services-carousel.component.html',
  styleUrls: ['./services-carousel.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ServicesCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('serviceCard') serviceCard: ElementRef | undefined;
  images = [
    {
      url: 'https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/service-circle-1.png',
      title: 'Residential Cleaning',
      caption: 'High-quality cleaning services to make your space shine.',
    },
    {
      url: 'https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/service-circle-2.png',
      title: 'Move-In/Move-Out Cleaning',
      caption: 'Eco-friendly cleaning options for a healthy environment.',
    },
    {
      url: 'https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/service-circle-3.png',
      title: 'Apartment Cleaning',
      caption: 'Affordable and reliable cleaning for homes and offices.',
    },
    {
      url: 'https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/service-circle-4.png',
      title: 'Commercial Cleaning',
      caption: 'Professional cleaning staff with attention to detail.',
    },
    {
      url: 'https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/blog-post-img-2-2.jpg',
      title: 'Carpet Cleaning',
      caption: 'Top-rated service with a focus on customer satisfaction.',
    },
    {
      url: 'https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/blog-post-img-3.jpg',
      title: 'Window Cleaning',
      caption: 'Efficient cleaning solutions to meet all your needs.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('Images:', this.images);
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
