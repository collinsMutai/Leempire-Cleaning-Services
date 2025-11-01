import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

declare let gtag: Function; // ✅ Declare GA4 function globally

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm: FormGroup;
  isSending = false;
  isFormSubmitted = false; // To control form submission feedback

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  // ✅ IntersectionObserver for animations (unchanged)
  ngAfterViewInit(): void {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => observer.observe(element));
  }

  // ✅ Send Email + Track GA4 event
  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.isFormSubmitted = true;
      this.showSnack('⚠️ Please fill in all required fields.', 'Close');
      return;
    }

    this.isSending = true;
    const formData = this.contactForm.value;

    emailjs
      .send(
        environment.emailjs.serviceID,
        environment.emailjs.templateID,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        environment.emailjs.publicKey
      )
      .then(() => {
        this.isSending = false;
        this.contactForm.reset();
        this.isFormSubmitted = false; // Reset the form submission flag
        this.showSnack('✅ Message sent successfully!', 'Close');

        // ✅ Track form submission event in Google Analytics
        if (typeof gtag === 'function') {
          gtag('event', 'request_quote', {
            event_category: 'lead',
            event_label: 'Contact Form Submission',
            value: 1,
          });
        }
      })
      .catch((error) => {
        this.isSending = false;
        console.error('Email send failed:', error);
        this.showSnack('❌ Failed to send message. Please try again.', 'Close');
      });
  }

  private showSnack(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['contact-snackbar'],
    });
  }

  // Accessor for form control errors
  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required.`;
    }
    if (control?.hasError('pattern')) {
      return `Please enter a valid ${controlName}.`;
    }
    if (control?.hasError('email')) {
      return `Please enter a valid email.`;
    }
    return '';
  }
}
