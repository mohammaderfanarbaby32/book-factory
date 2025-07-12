import React from "react";
import { Link } from "react-router-dom";

function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-10 font-iranyekan text-right text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-[#882E1B] dark:text-[#fbbf24]">
        شرایط استفاده از بوک فکتوری
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">۱. حساب کاربری</h2>
        <p>
          ایجاد حساب کاربری برای ثبت سفارش الزامی نیست، اما داشتن حساب امکان پیگیری سفارش و مشاهده سوابق را آسان‌تر می‌کند. مسئولیت حفظ اطلاعات حساب برعهده کاربر است.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">۲. حقوق مالکیت فکری</h2>
        <p>
          تمامی محتوای این وب‌سایت، از جمله تصاویر، متون و طراحی‌ها متعلق به بوک فکتوری است و هرگونه استفاده تجاری یا غیرقانونی بدون اجازه ممنوع است.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">۳. سفارش و ارسال</h2>
        <p>
          پس از ثبت سفارش، تأیید و ارسال آن وابسته به موجودی کالا و آدرس صحیح است. بوک فکتوری مجاز است در صورت بروز مشکلات فنی یا اطلاعات ناقص، سفارش را لغو کند.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">۴. بازگشت و لغو سفارش</h2>
        <p>
          شرایط بازگشت کالا مطابق با{" "}
          <Link
            to="/returns"
            className="text-[#882E1B] dark:text-[#fbbf24] underline transition hover:text-[#6d1e10] dark:hover:text-[#ffd6c8]"
          >
            سیاست بازگشت سفارش
          </Link>{" "}
          تعیین شده و تنها برای کتاب‌های فیزیکی معتبر است.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">۵. رفتار کاربران</h2>
        <p>
          کاربران موظف به رعایت ادب در نظرات و پیام‌ها هستند. هرگونه محتوای توهین‌آمیز یا خلاف قوانین ایران منجر به حذف حساب کاربری خواهد شد.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">۶. تغییر شرایط استفاده</h2>
        <p>
          بوک فکتوری می‌تواند در هر زمان این شرایط را به‌روزرسانی کند. ادامه استفاده از وب‌سایت به معنای پذیرش تغییرات جدید است.
        </p>
      </section>
    </div>
  );
}

export default TermsOfUse;
