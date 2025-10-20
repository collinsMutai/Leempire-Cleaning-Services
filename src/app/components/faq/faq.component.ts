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
      question: 'Do you offer commercial cleaning in Acworth, GA?',
      answer:
        'Yes, we specialize in professional commercial cleaning services throughout Acworth, GA. Our team ensures every workspace is spotless, safe, and ready for business.',
    },
    {
      question: 'Are your commercial cleaners insured and background-checked?',
      answer:
        'Absolutely. All LeEmpire commercial cleaning professionals in Acworth are fully insured, bonded, and background-checked for your peace of mind.',
    },
    {
      question: 'Can you clean after business hours?',
      answer:
        'Yes. We offer flexible scheduling for Acworth businesses, including after-hours and weekend commercial cleaning to avoid disrupting your operations.',
    },
    {
      question: 'Do you bring your own cleaning products and equipment?',
      answer:
        'Yes, we supply all professional-grade, eco-friendly cleaning products and equipment needed for every commercial cleaning project in Acworth.',
    },
    {
      question: 'Can I customize my commercial cleaning plan?',
      answer:
        'Definitely. We provide fully customizable commercial cleaning plans to fit your specific facility type, schedule, and cleaning needs in Acworth, GA.',
    },
    {
      question: 'What types of businesses do you clean?',
      answer:
        'We provide commercial cleaning for a variety of local Acworth businesses — including retail stores, clinics, warehouses, and corporate buildings.',
    },
    {
      question: 'How often should a business schedule commercial cleaning?',
      answer:
        'That depends on your facility size and foot traffic. Most Acworth businesses choose daily, weekly, or biweekly cleaning to maintain a healthy workspace.',
    },
    {
      question: 'Do you use eco-friendly cleaning products?',
      answer:
        'Yes, all of our commercial cleaning services in Acworth use non-toxic, eco-friendly products that are safe for employees, clients, and the environment.',
    },
    {
      question: 'Why choose LeEmpire Cleaning Services?',
      answer:
        'LeEmpire Cleaning Services is a veteran-owned, locally operated commercial cleaning company serving Acworth, GA. We are known for reliability, attention to detail, and consistent 5-star service.',
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
