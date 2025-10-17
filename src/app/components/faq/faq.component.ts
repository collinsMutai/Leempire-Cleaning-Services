import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements AfterViewInit {
  faqs = [
    {
      question: 'Do you offer one-time deep cleaning in Acworth?',
      answer:
        'Yes, we provide one-time deep cleaning services in Acworth, GA for move-ins, move-outs, special events, and seasonal cleanings.',
    },
    {
      question: 'Are your cleaners insured and background-checked?',
      answer:
        'Absolutely. All of our professional cleaners in Acworth are fully insured, bonded, and undergo thorough background checks.',
    },
    {
      question: 'Do you offer after-hours or weekend cleaning?',
      answer:
        'Yes, we can accommodate after-hours and weekend cleaning appointments in Acworth—perfect for commercial spaces and busy households.',
    },
    {
      question: 'Do I need to provide cleaning supplies?',
      answer:
        'No, we bring our own eco-friendly, non-toxic cleaning products and equipment for all cleaning services in Acworth.',
    },
    {
      question: 'Can I customize my cleaning checklist?',
      answer:
        'Yes, all of our residential and commercial cleaning services in Acworth are fully customizable to match your needs and schedule.',
    },
    {
      question: 'Do you provide move-out cleaning in Acworth, GA?',
      answer:
        'Yes! Our move-out cleaning service helps tenants, landlords, and homeowners in Acworth prepare their property for a smooth transition.',
    },
    {
      question: 'Is regular maid service available in Acworth, Georgia?',
      answer:
        'We offer weekly, biweekly, and monthly maid services throughout Acworth, GA for both homes and small offices.',
    },
    {
      question: 'Do you clean commercial spaces in Acworth?',
      answer:
        'Absolutely. Our commercial cleaning services in Acworth cover offices, retail stores, and local businesses of all sizes.',
    },
    {
      question: 'What makes you the best cleaning company in Acworth?',
      answer:
        'As a veteran-owned and locally operated cleaning company in Acworth, we pride ourselves on detailed, reliable service and 5-star customer satisfaction.',
    },
  ];

  ngAfterViewInit() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
          } else {
            el.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    accordionItems.forEach((item) => observer.observe(item));
  }
}
