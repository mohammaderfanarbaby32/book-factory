import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function BookSlider({
  title = "",
  books = [],
  showDiscountImage = false,
  showDivider = true,
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 my-10" dir="rtl">
      {title && (
        <h2
          style={{
            fontSize: 'clamp(1.125rem, 2vw + 0.5rem, 1.75rem)',
          }}
          className="font-bold mb-2 text-black dark:text-white"
        >
          {title}
        </h2>
      )}

      {showDivider && (
        <div className="w-full h-1 bg-gradient-to-l from-black via-gray-300 to-gray-200 dark:from-white dark:via-gray-700 dark:to-gray-900 mb-4 rounded-full"></div>
      )}

      {showDiscountImage && (
        <img
          src="../icons/takhfif.png"
          alt="تخفیف"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-36 sm:w-44 z-20 pointer-events-none"
        />
      )}

      {/* دکمه‌های اسکرول فقط در دسکتاپ */}
      <div className="hidden sm:block">
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 text-black dark:text-white shadow-md p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className={`absolute top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-gray-800 text-black dark:text-white shadow-md p-2 rounded-full ${
            showDiscountImage ? 'right-40' : 'right-4'
          }`}
        >
          ▶
        </button>
      </div>

      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto scroll-smooth py-4 scrollbar-hide ${
          showDiscountImage ? 'pr-52' : ''
        }`}
      >
        {books.map((book) => (
          <Link
            key={`${book.id}-${book.title}`}
            to={`/BookProduct/${book.id}`} // 👈 فقط این خط عوض شد
            className="flex-shrink-0 bg-white dark:bg-gray-900 rounded-lg shadow-md p-3 w-44 sm:w-60 transition-transform hover:scale-105 duration-300"
          >
            <img
              loading="lazy"
              src={book.image}
              alt={book.title}
              className="w-full h-56 sm:h-72 object-cover mb-3 rounded"
            />
            <h3 className="font-semibold text-[clamp(1rem,2.5vw,1.25rem)] mb-1 text-black dark:text-white">
              {book.title}
            </h3>
            <p className="text-[clamp(0.75rem,2vw,1rem)] text-gray-600 dark:text-gray-300">
              نویسنده: {book.author}
            </p>
            <p className="text-orange-600 font-bold text-[clamp(0.875rem,2vw,1.125rem)] mt-3">
              {book.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BookSlider;
