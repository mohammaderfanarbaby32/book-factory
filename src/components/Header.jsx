import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutId = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50 || currentScrollY < lastScrollY.current) {
        // اگر اسکرول به بالا بود یا نزدیک بالای صفحه
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        // اسکرول به پایین
        setShowHeader(false);
      }

      // پاک کردن تایمر قبلی
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      // اگر کاربر اسکرول نکند بعد از 1 ثانیه هدر نمایش داده شود
      timeoutId.current = setTimeout(() => {
        setShowHeader(true);
      }, 500);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <header
        className={`flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-[#293940] dark:bg-[#111] text-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Dark Mode Button */}
        <button
          type="button"
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="w-10 h-10 sm:w-14 sm:h-14 bg-[#882E1B] rounded-full shadow-lg flex items-center justify-center hover:bg-[#772819] transition-all z-50 p-1.5 sm:p-2"
        >
          <img src="../icons/dark-mode.png" alt="Dark Mode" className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src="../icons/Logo.jpeg" className="w-12 sm:w-16 cursor-pointer" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/login"
            className="w-10 h-10 sm:w-14 sm:h-14 bg-[#882E1B] rounded-full shadow-lg flex items-center justify-center hover:bg-[#772819] transition-all p-1.5 sm:p-2"
          >
            <img src="../icons/person.png" alt="Person" className="w-5 h-5 sm:w-7 sm:h-7" />
          </Link>

          <Link
            to="/cart"
            className="w-10 h-10 sm:w-14 sm:h-14 bg-[#882E1B] rounded-full shadow-lg flex items-center justify-center hover:bg-[#772819] transition-all p-1.5 sm:p-2"
          >
            <img src="../icons/shopping-card-icon.png" alt="ShoppingCart" className="w-5 h-5 sm:w-7 sm:h-7" />
          </Link>


        </div>

        {/* Mobile Menu Button */}
        <button className="text-white block lg:hidden" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Spacer برای جبران ارتفاع هدر */}
      <div className="h-16"></div>

      {/* Navigation Bar */}
      <nav className="hidden mt-6 lg:flex justify-center gap-8 p-4 bg-[#f4eadf] dark:bg-[#222] border-b border-gray-200 dark:border-gray-700 w-full text-sm md:text-base text-black dark:text-white">
        <Link to="/" className="hover:text-orange-500 dark:hover:text-orange-400">خانه</Link>
        <Link to="#" className="hover:text-orange-500 dark:hover:text-orange-400">پرفروش‌ترین‌ها</Link>
        <Link to="/about-us" className="hover:text-orange-500 dark:hover:text-orange-400">درباره ما</Link>
        <Link to="/contact-us" className="hover:text-orange-500 dark:hover:text-orange-400">تماس با ما</Link>
      </nav>

       {/* Search Section */}
      {!isAuthPage && (
        <section className="flex flex-col sm:flex-row sm:mt-6 lg:mt-0 justify-center items-center gap-4 p-4 bg-[#f4eadf] dark:bg-[#222] w-full max-w-6xl mx-auto">
          <input
            type="text"
            placeholder="جستجوی کتاب، نویسنده و..."
            className="border rounded p-2 w-full sm:w-1/2 bg-white dark:bg-[#333] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
          />
          <button className="bg-[#8D3825] hover:bg-[#894B3D] text-white px-4 py-2 rounded w-full sm:w-auto dark:bg-[#a54f3c] dark:hover:bg-[#9c3f30]">
            جستجو
          </button>
        </section>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#f9f2e8] dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-700 flex flex-col text-black dark:text-white">
          <Link to="/" className="block p-4 active:bg-[#e2d4c5] dark:active:bg-[#333] transition-colors duration-100">خانه</Link>
          <Link to="#" className="block p-4 active:bg-[#e2d4c5] dark:active:bg-[#333] transition-colors duration-100">پرفروش‌ترین‌ها</Link>
          <Link to="/about-us" className="block p-4 active:bg-[#e2d4c5] dark:active:bg-[#333] transition-colors duration-100">درباره ما</Link>
          <Link to="/contact-us" className="block p-4 active:bg-[#e2d4c5] dark:active:bg-[#333] transition-colors duration-100">تماس با ما</Link>
          <Link
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full p-4 text-center border-t active:bg-[#e2d4c5] transition-colors duration-200"
          >
            ورود / ثبت نام
          </Link>

          <Link
            to="/cart"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full p-4 text-center border-t border-b active:bg-[#e2d4c5] transition-colors duration-200"
          >
            سبد خرید
          </Link>

        </div>
      )}
    </div>
  );
}

export default Header;
