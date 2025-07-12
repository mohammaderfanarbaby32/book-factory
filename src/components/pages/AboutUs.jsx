import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 font-iranyekan text-right text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold text-[#882E1B] dark:text-[#fbbf24] mb-6">
        درباره بوک فکتوری
      </h1>

      <section className="mb-8 leading-8">
        <p>
          بوک فکتوری فقط یک فروشگاه آنلاین کتاب نیست، بلکه یک تجربه‌ی متفاوت از کتاب‌خوانی است.
          ما با گردآوری بهترین کتاب‌های ایرانی و خارجی، تلاش می‌کنیم تا دنیای مطالعه را برای
          همه جذاب‌تر و در دسترس‌تر کنیم.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">ماموریت ما</h2>
        <p>
          هدف ما ارائه‌ی کتاب‌هایی است که نه‌تنها سرگرم‌کننده باشند، بلکه ذهن شما را توسعه دهند.
          ما باور داریم که مطالعه، سبک زندگی است و بوک فکتوری همراه شما در این مسیر خواهد بود.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">چرا بوک فکتوری؟</h2>
        <ul className="list-disc pr-5 space-y-2">
          <li>ارسال سریع و بسته‌بندی مطمئن</li>
          <li>تخفیف‌های منظم و قیمت‌های رقابتی</li>
          <li>پشتیبانی پاسخگو و واقعی</li>
          <li>دسته‌بندی‌های هوشمند و پیشنهادات شخصی‌سازی‌شده</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">تیم ما</h2>
        <p>
          ما یک تیم کوچک اما پرانرژی هستیم، از علاقه‌مندان کتاب تا توسعه‌دهندگان وب. با کمک شما،
          هر روز بهتر می‌شویم.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">ارتباط با ما</h2>
        <p>
          اگر سوالی دارید یا پیشنهادی برای ما دارید، از طریق صفحه{" "}
          <Link to="/contact-us" className="text-[#882E1B] dark:text-[#fbbf24] underline hover:text-[#6d1e10] dark:hover:text-[#ffd6c8]">
            تماس با ما
          </Link>{" "}
          خوشحال می‌شویم از شما بشنویم.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
