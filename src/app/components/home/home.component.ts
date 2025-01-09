import { Component } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { ServicesCarouselComponent } from '../services-carousel/services-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, ServicesCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
