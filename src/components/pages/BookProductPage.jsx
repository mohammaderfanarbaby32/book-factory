import React, { useState } from 'react';

const recommendedBooks = [
  {
    id: 1,
    title: "هنر ظریف بی‌خیالی",
    author: "مارک منسن",
    price: "۱۸۰,۰۰۰ تومان",
    image: "/image/image-test1.jpg",
  },
  {
    id: 2,
    title: "قدرت عادت",
    author: "چارلز دوهیگ",
    price: "۲۲۰,۰۰۰ تومان",
    image: "/image/image-test2.jpg",
  },
  {
    id: 3,
    title: "بیندیشید و ثروتمند شوید",
    author: "ناپلئون هیل",
    price: "۲۰۰,۰۰۰ تومان",
    image: "/image/image-test3.jpg",
  },
  {
    id: 4,
    title: "اثر مرکب",
    author: "دارن هاردی",
    price: "۱۹۰,۰۰۰ تومان",
    image: "/image/image-test4.jpg",
  },
];

export default function BookProductPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div dir="rtl" className="transition-all duration-500 bg-[#f9f2e8]">
      {/* دکمه پشتیبانی */}
      <a
        href="#"
        className="fixed bottom-10 left-10 w-16 h-16 bg-[#882E1B] rounded-full shadow-lg flex items-center justify-center hover:bg-[#772819] transition-all z-50"
      >
        <img src="/icons/chat-icon.png" alt="پشتیبانی" width={28} height={28} />
      </a>

      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Product Info */}
        <div className="w-full mx-auto bg-[#293940] rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8 mt-10 text-white">
          <div className="md:w-1/4 flex justify-center items-start">
            <img src="/image/image-test2.jpg" alt="کتاب ۳۳ استراتژی جنگ" width={192} height={256} className="rounded-xl shadow" />
          </div>

          <div className="md:w-2/4 text-center md:text-right space-y-4">
            <h1 className="text-xl font-bold">کتاب ۳۳ استراتژی جنگ</h1>
            <div className="text-yellow-400 text-lg">★★★★★ <span className="text-white text-sm">(۱ دیدگاه)</span></div>
            <div className="text-lg">
              <span className="line-through text-red-500 text-base">۵۶۰,۰۰۰ تومان</span>
              <span className="text-green-600 font-semibold text-xl">۱۹۶,۰۰۰ تومان</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
              <label className="text-sm">تعداد:</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="bg-gray-100 hover:bg-gray-200 px-3 py-1 text-lg font-bold text-black">
                  −
                </button>
                <input type="text" value={quantity} readOnly className="w-12 text-center outline-none text-black" />
                <button onClick={() => setQuantity((q) => q + 1)} className="bg-gray-100 hover:bg-gray-200 px-3 py-1 text-lg font-bold text-black">
                  +
                </button>
              </div>

              <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
                افزودن به سبد خرید
              </button>
            </div>
          </div>

          <div className="md:w-1/4 text-sm space-y-2">
            <p><span className="font-semibold">موضوع:</span> راه و رسم زندگی</p>
            <p><span className="font-semibold">نویسنده:</span> رابرت گرین</p>
            <p><span className="font-semibold">مترجم:</span> زهرا آروشی</p>
            <p><span className="font-semibold">ناشر:</span> شاهدخت پاییز</p>
            <p><span className="font-semibold">تعداد صفحه:</span> ۶۰۰</p>
            <p><span className="font-semibold">سال انتشار:</span> ۱۴۰۰</p>
            <p><span className="font-semibold">نوع جلد:</span> شومیز</p>
            <p><span className="font-semibold">کاغذ:</span> بالک اروپایی</p>
          </div>
        </div>

        {/* عنوان کتاب‌های پیشنهادی */}
        <h3 className="text-xl md:text-2xl font-semibold text-center mt-10 my-2 text-[#8E3825]">
          این کتاب‌هارو از دست نده !
        </h3>
        <div className="w-full h-1 mb-6 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full bg-[#ccc]" />
          <div className="absolute top-0 left-[40%] w-1/5 h-full bg-[#8E3825]" />
        </div>

        {/* کتاب‌های پیشنهادی */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
          {recommendedBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow hover:shadow-md p-4 text-center">
              <img src={book.image} alt={book.title} className="w-full h-60 object-cover rounded mb-2" />
              <h4 className="text-sm font-semibold text-gray-800">{book.title}</h4>
              <p className="text-xs text-gray-500 mb-1">توسط {book.author}</p>
              <p className="text-sm text-green-700 font-bold">{book.price}</p>
              <button className="mt-2 bg-[#8E3825] hover:bg-[#772819] text-white px-3 py-1 rounded text-sm transition">
                افزودن به سبد
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
