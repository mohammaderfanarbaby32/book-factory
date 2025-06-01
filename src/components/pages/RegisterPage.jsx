import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    setCaptcha(randomNumber.toString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptcha !== captcha) {
      alert("کد امنیتی اشتباه است!");
      return;
    }
    alert("ثبت‌نام با موفقیت انجام شد.");
  };

  return (
    <div
      className="bg-[#f9f2e8] dark:bg-gray-900 min-h-screen flex flex-col rtl font-sans transition-colors duration-300"
      dir="rtl"
    >
      {/* فرم ثبت‌نام */}
      <div className="flex-grow overflow-y-auto flex items-center justify-center px-4 py-10 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#e6cb81] dark:bg-[#3a2d18] shadow-md rounded-2xl p-6 sm:p-8 transition-colors duration-300"
        >
          <h2 className="text-center mb-5 text-lg sm:text-xl font-bold text-black dark:text-white">
            فرم ثبت‌نام
          </h2>

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">نام:</label>
          <input
            type="text"
            required
            placeholder="نام"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">نام خانوادگی:</label>
          <input
            type="text"
            required
            placeholder="نام خانوادگی"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">شماره موبایل:</label>
          <input
            type="text"
            required
            placeholder="شماره موبایل"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">ایمیل (اختیاری):</label>
          <input
            type="email"
            placeholder="ایمیل"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-4 mb-1 text-sm sm:text-base text-black dark:text-white">رمز عبور:</label>
          <input
            type="password"
            required
            placeholder="رمز عبور"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-4 mb-1 text-sm sm:text-base text-black dark:text-white">
            کد امنیتی را وارد کنید:{' '}
            <span className="font-bold text-[#6b4d1c] dark:text-yellow-300">{captcha}</span>
          </label>
          <input
            type="text"
            required
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            placeholder="کد امنیتی را وارد کنید"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-4"
          />

          <button
            type="submit"
            className="w-full p-3 bg-[#833511] dark:bg-[#aa3e29] hover:bg-[#6e2b0e] dark:hover:bg-[#94311e] text-white rounded-lg text-sm sm:text-base transition-all"
          >
            ثبت‌نام
          </button>

           <div className="mt-6 text-center text-sm sm:text-base text-black dark:text-white">
            آیا حساب کاربری دارید؟{' '}
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              ورود
            </Link>
          </div>

          <Link
            to="/"
            className="block mt-8 text-right text-[#6d5328] hover:text-[#bc9756] dark:text-gray-300 hover:dark:text-gray-400 font-bold cursor-pointer"
          >
            بازگشت به صفحه اصلی
          </Link>
        </form>
      </div>
    </div>
  );
}
