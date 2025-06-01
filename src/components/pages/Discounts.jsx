import React from "react";

function Discounts() {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800 dark:text-gray-200 font-iranyekan">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-[#882E1B] dark:text-orange-400">
        🎉 تخفیف‌های خرید از ایران‌کتاب
      </h1>

      {/* بخش ۱: تخفیف‌های خودکار */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📚 تخفیف‌های خودکار روی محصولات</h2>
        <p>
          برخی کتاب‌ها به صورت خودکار با تخفیف ویژه در سایت نمایش داده می‌شوند. این تخفیف‌ها نیازی به کد ندارند و قیمت نهایی کتاب در صفحه محصول قابل مشاهده است.
        </p>
      </section>

      {/* بخش ۲: کد تخفیف (غیرفعال فعلاً) */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🎟 کدهای تخفیف</h2>
        <p>
          در آینده نزدیک امکان استفاده از کدهای تخفیف در صفحه پرداخت فعال خواهد شد. با عضویت در خبرنامه یا دنبال کردن ما در شبکه‌های اجتماعی از کدهای تخفیف مطلع شوید.
        </p>
        <p className="mt-2 italic text-sm text-gray-500 dark:text-gray-400">
          (در حال حاضر کدهای تخفیف غیرفعال هستند)
        </p>
      </section>

      {/* بخش ۳: مناسبت‌ها */}
      <section>
        <h2 className="text-xl font-semibold mb-4">📅 تخفیف‌های مناسبتی</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { event: "روز دانشجو", description: "تخفیف ویژه برای دانشجویان روی کتاب‌های آموزشی و دانشگاهی" },
            { event: "روز دختر", description: "تخفیف روی رمان‌های عاشقانه و کتاب‌های انگیزشی" },
            { event: "روز مادر", description: "تخفیف روی کتاب‌های خانوادگی و روان‌شناسی" },
            { event: "روز پدر", description: "تخفیف روی زندگینامه‌ها و آثار تاریخی" },
            { event: "روز کتاب", description: "تخفیف عمومی روی کل سایت" },
            { event: "شب یلدا", description: "جشنواره یلدایی با تخفیف‌های چندروزه" },
            { event: "عید نوروز", description: "تخفیف نوروزی ویژه‌ برای شروع سال جدید با کتاب" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#fdf6f2] dark:bg-[#1f1f1f] rounded-xl shadow-sm border border-gray-200 dark:border-gray-600"
            >
              <h3 className="font-semibold text-lg mb-1 text-[#882E1B] dark:text-[#fbbf24]">
                {item.event}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Discounts;
