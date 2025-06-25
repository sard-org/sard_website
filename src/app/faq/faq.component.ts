import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqList = [
    { question: 'ما هو تطبيق سرد؟', answer: 'سرد هو تطبيق يقدم كتبًا صوتية مع تلخيصات ذكية باستخدام الذكاء الاصطناعي.' },
    { question: 'هل التلخيص يتم بالذكاء الاصطناعي؟', answer: 'نعم، يتم تلخيص الكتب تلقائيًا باستخدام تقنيات متقدمة في الذكاء الاصطناعي.' },
    { question: 'كيف أكسب نقاط عند قراءة الكتب يوميًا؟', answer: 'تحصل على نقاط تلقائيًا عند دخولك اليومي' },
    { question: 'هل التطبيق مجاني؟', answer: 'يوجد في التطبيق محتوى مجاني وآخر مدفوع حسب نوع الكتاب.' }
  ];

  activeIndex: number | null = null;
  i: any;

  toggleAnswer(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
