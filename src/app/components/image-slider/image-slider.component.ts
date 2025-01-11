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
  images: { src: string; heading: string; caption: string }[] = [
    {
      src: 'https://cleaning.ancorathemes.com/wp-content/uploads/2023/10/179_3-3-copyright.jpg',
      heading: 'Professional Cleaning Services',
      caption: 'Your home, your sanctuary. Cleaned to perfection.',
    },
    {
      src: 'https://cleaning.ancorathemes.com/wp-content/uploads/2023/10/179_3-1-copyright.jpg',
      heading: 'Eco-Friendly Cleaning',
      caption: 'Committed to sustainable and green practices.',
    },
    {
      src: 'https://cleaning.ancorathemes.com/wp-content/uploads/2023/10/179_3-2-copyright.jpg',
      heading: 'Experienced Cleaners',
      caption: 'Trust our team to provide top-notch services.',
    },
    {
      src: 'https://cleaning.ancorathemes.com/wp-content/uploads/2020/04/image-42-copyright-890x664.jpg',
      heading: 'Customizable Packages',
      caption: 'Choose a package that suits your needs.',
    },
  ];

  currentIndex = 0;

  private slideInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.slideInterval = setInterval(() => {
      this.moveToNext();
    }, 3000);
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
