import React from "react";

const faqs = [
  {
    question: "چگونه می‌توانم سفارشم را پیگیری کنم؟",
    answer: "برای پیگیری سفارش، وارد حساب کاربری خود شوید و از بخش 'سفارش‌های من' وضعیت سفارش را مشاهده کنید.",
  },
  {
    question: "هزینه ارسال چقدر است؟",
    answer: "هزینه ارسال بسته به موقعیت جغرافیایی شما و وزن سفارش متغیر است و هنگام نهایی کردن خرید محاسبه می‌شود.",
  },
  {
    question: "آیا امکان بازگرداندن کتاب وجود دارد؟",
    answer: "بله، تا ۷ روز پس از تحویل می‌توانید کتاب را بازگردانید، به شرط آنکه سالم و بدون آسیب باشد.",
  },
  {
    question: "چگونه کد تخفیف دریافت کنم؟",
    answer: "با عضویت در خبرنامه ما و دنبال کردن شبکه‌های اجتماعی، از کدهای تخفیف مطلع خواهید شد.",
  },
  {
    question: "آیا ارسال بین‌المللی دارید؟",
    answer: "بله، ارسال بین‌المللی به اکثر کشورها امکان‌پذیر است. لطفاً هنگام خرید آدرس دقیق خود را وارد کنید.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 font-iranyekan text-right text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-center">پرسش‌های متداول</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
            <p className="text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
