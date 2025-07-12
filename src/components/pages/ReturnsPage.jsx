import React from "react";

function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-10 text-right font-iranyekan text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-[#882E1B] dark:text-[#fbbf24]">
        بازگرداندن سفارش
      </h1>

      <p className="mb-4 leading-relaxed">
        اگر از خرید خود رضایت کامل ندارید، ما امکان بازگرداندن کالا را به راحتی برایتان فراهم کرده‌ایم...
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">شرایط بازگرداندن</h2>
      <ul className="list-disc pr-5 space-y-2">
        <li>کالا باید حداکثر تا ۷ روز پس از دریافت، بازگردانده شود.</li>
        <li>کالا باید در شرایط اولیه، بدون هیچ‌گونه آسیب فیزیکی یا تغییر باشد.</li>
        <li>فاکتور خرید یا شماره سفارش باید ارائه شود.</li>
        <li>در صورت دریافت کالای آسیب‌دیده، لطفاً عکس کالا را ارسال نمایید.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">نحوه بازگرداندن کالا</h2>
      <ol className="list-decimal pr-5 space-y-2">
        <li>فرم زیر را با دقت پر کنید.</li>
        <li>کارشناسان ما ظرف ۲۴ ساعت کاری با شما تماس خواهند گرفت.</li>
        <li>در صورت تایید، آدرس جهت ارسال مرجوعی در اختیار شما قرار خواهد گرفت.</li>
        <li>وجه شما پس از دریافت و بررسی کالا، طی ۳ تا ۵ روز کاری بازگردانده خواهد شد.</li>
      </ol>

      {/* فرم بازگشت مرتب‌شده */}
      <form className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="border border-gray-300 p-2 rounded-md text-right"
          required
        />
        <input
          type="email"
          placeholder="ایمیل"
          className="border border-gray-300 p-2 rounded-md text-right"
          required
        />
        <input
          type="tel"
          placeholder="شماره تماس"
          className="border border-gray-300 p-2 rounded-md text-right"
          required
        />
        <input
          type="text"
          placeholder="شماره سفارش"
          className="border border-gray-300 p-2 rounded-md text-right"
          required
        />
        <textarea
          placeholder="توضیحات یا دلیل بازگرداندن"
          className="col-span-1 md:col-span-2 border border-gray-300 p-2 rounded-md text-right"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-[#882E1B] text-white py-2 rounded-md hover:bg-[#772819] transition"
        >
          ثبت درخواست بازگشت
        </button>
      </form>
    </div>
  );
}

export default ReturnsPage;
