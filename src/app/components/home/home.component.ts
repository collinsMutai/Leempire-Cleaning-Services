import { Component } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { ServicesCarouselComponent } from '../services-carousel/services-carousel.component';
import { AboutComponent } from '../about/about.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ImageSliderComponent,
    AboutComponent,
    ServicesCarouselComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
