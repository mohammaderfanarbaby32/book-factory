import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#F4EADF] dark:bg-gray-900 text-sm text-right text-gray-700 dark:text-gray-300 font-iranyekan w-full">
       {/* ویژگی‌ها */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 py-6 border-b border-gray-300 dark:border-gray-700">
        {[
          {
            icon: "https://cdn-icons-png.flaticon.com/512/929/929426.png", // ضمانت اصالت کتاب
            text: "ضمانت اصالت کتاب",
          },
          {
            icon: "https://cdn-icons-png.flaticon.com/512/126/126472.png", // پشتیبانی
            text: "پشتیبانی حرفه‌ای",
          },
          {
            icon: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
            text: "تحویل سریع",
          },
          {
            icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
            text: "سلامت فیزیکی",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={item.icon}
              alt={`آیکون ${item.text}`}
              className="w-7 h-7 md:w-6 md:h-6"
            />
            <span className="text-base md:text-sm">{item.text}</span>
          </div>
        ))}
      </div>

      {/* خبرنامه و شبکه‌های اجتماعی */}
      <div className="bg-[#293940] dark:bg-gray-800 text-gray-200 px-4 py-10 border-b border-gray-700">
        <div className="container mx-auto text-center">
          <p className="mb-6 font-semibold text-xl md:text-lg">
            از جدیدترین کتاب‌ها و تخفیف‌ها در بوک فکتوری باخبر شوید
          </p>

          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
            onSubmit={(e) => {
              e.preventDefault();
              // منطق ارسال ایمیل در اینجا اضافه شود
            }}
          >
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="w-full sm:w-[300px] px-4 py-2 rounded-md text-sm text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#882E1B]"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#882E1B] text-white font-semibold rounded-md hover:bg-[#772819] transition-all"
            >
              ارسال
            </button>
          </form>

          <p className="mb-3 font-semibold text-lg md:text-base">
            ما را در شبکه‌های اجتماعی دنبال کنید
          </p>

          <div className="flex justify-center gap-6 mt-4 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#f2c94c] transition"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#1da1f2] transition"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Telegram" className="hover:text-[#0088cc] transition"><i className="fab fa-telegram"></i></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#e1306c] transition"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* راهنما و اطلاعات */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-b border-gray-300 dark:border-gray-700">
        <div>
          <h4 className="font-bold mb-3 text-lg dark:text-white">راهنمای خرید از بوک فکتوری</h4>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li>
              <Link to="/cart" className="cursor-pointer hover:text-[#882E1B] transition block">
                ثبت سفارش
              </Link>
            </li>
            <li>
              <Link to="/shipping-terms" className="cursor-pointer hover:text-[#882E1B] transition block">
                شرایط ارسال سفارش
              </Link>
            </li>
            <li>
              <Link to="/payment-method" className="cursor-pointer hover:text-[#882E1B] transition block">
                شیوه پرداخت
              </Link>
            </li>
            <li>
              <Link to="/discounts" className="cursor-pointer hover:text-[#882E1B] transition block">
                تخفیف‌های خرید
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-lg dark:text-white">خدمات مشتریان</h4>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            <li>
              <Link to="/order-tracking" className="cursor-pointer hover:text-[#882E1B] transition block">
                پیگیری سفارش
              </Link>
            </li>
            <li>
              <Link to="/faq" className="cursor-pointer hover:text-[#882E1B] transition block">
                پرسش‌های متداول
              </Link>
            </li>
            <li>
              <Link to="/returns" className="cursor-pointer hover:text-[#882E1B] transition block">
                بازگرداندن سفارش
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="cursor-pointer hover:text-[#882E1B] transition block">
                شرایط استفاده
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="cursor-pointer hover:text-[#882E1B] transition block">
                حریم خصوصی
              </Link>
            </li>
            <li>
              <Link to="/rules" className="cursor-pointer hover:text-[#882E1B] transition block">
                قوانین سایت
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base flex flex-col gap-2">
          <h4 className="font-bold mb-3 text-lg dark:text-white">۰۲۱-۶۲۹۹۹۹۳۵</h4>
          <Link to="/about-us" className="cursor-pointer hover:text-[#882E1B] transition block">
            درباره ما
          </Link>
          <Link to="/contact-us" className="cursor-pointer hover:text-[#882E1B] transition block">
            تماس با ما
          </Link>
        </div>
      </div>

      {/* متن نهایی */}
      <div className="px-4 pb-8 text-center text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        <p>
          با بوک فکتوری، آزمون و خطایی در انتخاب و خرید کتاب در کار نخواهد بود. کسانی که تمایل به خرید کتاب‌های ارزشمند دارند، هیچ دغدغه‌ای برای یافتن بهترین کتاب‌ها ندارند. مطمئن باشید کتابی که از بوک فکتوری می‌خرید، ارزش زمانی که صرف می‌کنید را دارد.
        </p>
        <p className="mt-4">
          © تمام حقوق این وب‌سایت برای شرکت هفت راهبرد (فروشگاه آنلاین بوک فکتوری) محفوظ است.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
