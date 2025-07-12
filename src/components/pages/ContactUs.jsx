// src/pages/ContactUs.jsx
import React from "react";

function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-iranyekan text-right text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-[#882E1B] dark:text-[#fbbf24]">تماس با ما</h1>
      
      <p className="mb-4">
        اگر سوالی، انتقادی یا پیشنهادی دارید، با ما در میان بگذارید. تیم پشتیبانی ما آماده پاسخگویی به شماست.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">آدرس ما</h2>
          <p>تهران، خیابان انقلاب، خیابان فخر رازی، پلاک ۲۸</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">راه‌های ارتباطی</h2>
          <p>تلفن: ۰۲۱-۶۲۹۹۹۹۳۵</p>
          <p>ایمیل: support@bookfactory.com</p>
        </div>
      </div>

      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("پیام شما ارسال شد!");
        }}
      >
        <input
          type="text"
          placeholder="نام شما"
          className="p-3 border border-gray-300 rounded-md w-full text-sm"
          required
        />
        <input
          type="email"
          placeholder="ایمیل"
          className="p-3 border border-gray-300 rounded-md w-full text-sm"
          required
        />
        <textarea
          placeholder="پیام شما"
          rows="5"
          className="p-3 border border-gray-300 rounded-md w-full text-sm"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-[#882E1B] text-white px-6 py-2 rounded-md hover:bg-[#772819] transition-all"
        >
          ارسال پیام
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
