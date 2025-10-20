import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  images: {
    webp: string;
    jpg: string;
    heading: string;
    caption: string;
    alt: string;
  }[] = [
    {
      webp: 'assets/images/commercial-cleaning-acworth-georgia.webp',
      jpg: 'assets/images/commercial-cleaning-acworth-georgia.jpg',
      heading: 'Commercial Cleaning in Acworth, Georgia',
      caption:
        'Your home is your sanctuary — we clean it to perfection with care and precision.',
      alt: 'Commercial Cleaning in Acworth, Georgia - Acworth, Georgia Cleaning Services',
    },
    {
      webp: 'assets/images/eco-friendly-cleaning-acworth-ga.webp',
      jpg: 'assets/images/eco-friendly-cleaning-acworth-ga.jpg',
      heading: 'Eco-Friendly Cleaning Services',
      caption:
        'Sustainable, non-toxic cleaning solutions for a healthier home and planet.',
      alt: 'Eco-Friendly Cleaning Services - Acworth, Georgia Cleaning Services',
    },
    {
      webp: 'assets/images/professional-cleaners-acworth-ga.webp',
      jpg: 'assets/images/professional-cleaners-acworth-ga.jpg',
      heading: 'Experienced Professional Cleaners',
      caption:
        'Trusted, background-checked cleaning experts with a proven track record in Acworth.',
      alt: 'Experienced Professional Cleaners - Acworth, Georgia Cleaning Services',
    },
    {
      webp: 'assets/images/custom-cleaning-packages-georgia.webp',
      jpg: 'assets/images/custom-cleaning-packages-georgia.jpg',
      heading: 'Custom Cleaning Packages in Georgia',
      caption:
        'Flexible service plans designed to meet your unique needs and schedule.',
      alt: 'Custom Cleaning Packages in Georgia',
    },
  ];

  currentIndex = 0;

  private slideInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.slideInterval = setInterval(() => {
      this.moveToNext();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  moveToNext() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  moveToPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
}
