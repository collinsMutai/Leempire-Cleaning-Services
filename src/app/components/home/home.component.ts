import { Component } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { ServicesCarouselComponent } from '../services-carousel/services-carousel.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent,   AboutComponent, ServicesCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
