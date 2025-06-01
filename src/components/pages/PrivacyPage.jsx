import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f9f2e8] dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Breadcrumb */}
        <nav className="w-full text-xs sm:text-sm py-4 px-2 sm:px-4 border-b border-gray-300 dark:border-gray-700">
          <ol className="flex flex-wrap space-x-1 space-x-reverse text-gray-600 dark:text-gray-300">
            <li>
              <a href="/" className="text-black dark:text-white font-semibold hover:underline">خانه</a>
            </li>
            <li><span className="px-2">/</span></li>
            <li className="text-gray-500">حریم خصوصی در بوک فکتوری</li>
          </ol>
        </nav>

        {/* Content */}
        <section className="text-justify leading-relaxed py-6 sm:py-8 md:py-10 px-2 sm:px-4 lg:px-0 max-w-3xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
            سیاست حفظ حریم خصوصی | بوک فکتوری
          </h1>

          <p className="mb-6 text-sm sm:text-base">
            در بوک فکتوری، حفظ حریم خصوصی و اطلاعات شخصی کاربران برای ما اهمیت بالایی دارد...
          </p>

          <h2 className="text-base sm:text-lg font-semibold mb-3 mt-6">اطلاعاتی که جمع‌آوری می‌کنیم:</h2>
          <ul className="list-disc pr-5 mb-6 space-y-2 text-sm sm:text-base">
            <li><strong>اطلاعات حساب کاربری:</strong> مانند نام، ایمیل، شماره تماس و آدرس.</li>
            <li><strong>اطلاعات پرداخت:</strong> مانند شماره کارت به‌صورت رمزگذاری‌شده و امن.</li>
            <li><strong>داده‌های فنی:</strong> مانند IP، مرورگر، صفحات بازدیدشده.</li>
          </ul>

          <h2 className="text-base sm:text-lg font-semibold mb-3 mt-6">نحوه استفاده از اطلاعات:</h2>
          <ul className="list-disc pr-5 mb-6 space-y-2 text-sm sm:text-base">
            <li>پردازش سفارشات و ارسال محصولات.</li>
            <li>ارسال اطلاعیه‌ها درباره سفارش یا خدمات جدید.</li>
            <li>تحلیل رفتار کاربران.</li>
            <li>ارسال ایمیل‌های تبلیغاتی با رضایت شما.</li>
          </ul>

          <h2 className="text-base sm:text-lg font-semibold mb-3 mt-6">اشتراک‌گذاری اطلاعات:</h2>
          <p className="mb-6 text-sm sm:text-base">
            اطلاعات شما تحت هیچ شرایطی به اشخاص ثالث فروخته یا بدون اجازه شما افشا نخواهد شد.
          </p>

          <h2 className="text-base sm:text-lg font-semibold mb-3 mt-6">امنیت اطلاعات:</h2>
          <p className="mb-6 text-sm sm:text-base">
            ما از روش‌های امنیتی به‌روز مانند رمزگذاری، فایروال و دسترسی محدود استفاده می‌کنیم.
          </p>

          <h2 className="text-base sm:text-lg font-semibold mb-3 mt-6">حقوق کاربران:</h2>
          <p className="mb-6 text-sm sm:text-base">
            شما حق دارید اطلاعات خود را مشاهده، ویرایش یا حذف کنید.
          </p>

          <h2 className="text-base sm:text-lg font-semibold mb-3 mt-6">تغییرات در سیاست حفظ حریم خصوصی:</h2>
          <p className="mb-6 text-sm sm:text-base">
            ممکن است این سیاست هر از گاهی به‌روزرسانی شود. آخرین نسخه همیشه از طریق همین صفحه در دسترس خواهد بود.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
