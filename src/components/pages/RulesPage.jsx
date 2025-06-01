import React from 'react';

export default function RulesPage() {
  return (
    <div
      className="transition-all duration-500 min-h-screen bg-[#f9f2e8] text-gray-900 dark:bg-[#0f172a] dark:text-white"
      dir="rtl"
    >
      {/* آیکون پشتیبانی */}
      <a
        href="#"
        className="fixed bottom-6 left-6 md:bottom-10 md:left-10 w-14 h-14 md:w-16 md:h-16 bg-[#882E1B] rounded-full shadow-lg flex items-center justify-center hover:bg-[#772819] transition-all z-50"
      >
        <img src="../icons/chat-icon.png" alt="پشتیبانی" className="w-6 h-6 md:w-7 md:h-7" />
      </a>

      {/* محتوای صفحه */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-justify leading-relaxed">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 border-b border-gray-300 dark:border-gray-600 pb-2">
          قوانین و مقررات استفاده از سایت Book Factory
        </h1>
        <p className="mb-6 text-sm sm:text-base">
          به وب‌سایت بوک فکتوری (Book Factory) خوش آمدید. استفاده شما از این وب‌سایت به منزله پذیرش شرایط زیر است. لطفاً قبل از ثبت سفارش، این قوانین را به دقت مطالعه فرمایید.
        </p>

        {[{
          title: '1. عضویت و حساب کاربری',
          rules: [
            'برای خرید از سایت، ثبت‌نام و ایجاد حساب کاربری الزامی است.',
            'کاربر موظف است اطلاعات واقعی، دقیق و به‌روز وارد کند.',
            'حفظ امنیت حساب کاربری (رمز عبور و اطلاعات ورود) بر عهده خود کاربر است.'
          ]
        }, {
          title: '2. محصولات ارائه‌شده',
          rules: [
            'بوک فکتوری ارائه‌دهنده کتاب‌های فیزیکی، الکترونیکی و فایل‌های مرتبط با کتاب و مطالعه است.',
            'توضیحات هر محصول، شامل نوع، فرمت، نحوه ارسال و قیمت، به‌صورت شفاف در صفحه محصول درج شده است.'
          ]
        }].map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-3">{section.title}</h2>
            <ul className="list-disc pr-5 space-y-2 text-sm sm:text-base">
              {section.rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2 className="text-lg sm:text-xl font-semibold mt-8 mb-3">7. تغییر قوانین</h2>
        <p className="mb-6 text-sm sm:text-base">
          ممکن است شرایط و قوانین بدون اطلاع قبلی تغییر یابد. نسخه به‌روزشده همواره از طریق همین صفحه در دسترس خواهد بود.
        </p>
      </section>
    </div>
  );
}
