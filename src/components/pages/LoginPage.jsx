import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/X/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });

      const data = await response.json();

      console.log("پاسخ سرور:", data);

      if (data === 'True') {
        alert('ورود موفق بود!');
        // اگر خواستی ریدایرکت کنی، اینجا می‌تونی استفاده کنی:
        // navigate('/dashboard');
      } else if (data === 'false') {
        alert('نام کاربری یا رمز اشتباهه');
      } else {
        alert('خطا در اطلاعات ارسالی: ' + JSON.stringify(data));
      }

    } catch (error) {
      console.error('خطا در ارسال درخواست:', error);
      alert('اتصال به سرور ممکن نیست');
    }
  };

  return (
    <div className="bg-[#f9f2e8] dark:bg-gray-900 min-h-screen flex flex-col rtl font-sans transition-colors duration-300" dir="rtl">
      <Header />

      {/* فرم ورود */}
      <div className="flex-grow flex items-center justify-center px-4 py-10 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#e6cb81] dark:bg-[#3a2d18] shadow-md rounded-2xl p-6 sm:p-8 transition-colors duration-300">
          <h2 className="text-center mb-5 text-lg font-bold text-black dark:text-white">ورود</h2>

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">نام کاربری:</label>
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2 text-sm sm:text-base"
          />

          <label className="block mt-4 mb-1 text-sm sm:text-base text-black dark:text-white">رمز عبور:</label>
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2 text-sm sm:text-base"
          />

          <div className="text-left mb-4">
            <a href="#" className="text-[#585241] dark:text-gray-300 text-sm">رمزت یادت رفته؟</a>
          </div>

          <button
            onClick={handleLogin}
            className="w-full p-3 bg-[#833511] dark:bg-[#aa3e29] hover:bg-[#6e2b0e] dark:hover:bg-[#94311e] text-white rounded-lg text-sm sm:text-base transition-all"
          >
            ورود
          </button>

          <div className="text-center mt-5 text-sm text-black dark:text-white">
            ثبت نام در بوک فکتوری <br />
            <Link to="/register" className="text-[#581c1c] hover:text-[#ffffff] hover:bg-[#571010] dark:text-red-300 dark:hover:text-[#ffffff] dark:hover:bg-red-400 border border-[#571010] dark:border-red-400 py-2 px-4 rounded-lg inline-block mt-3 transition-all">
              ایجاد حساب کاربری
            </Link>
          </div>

          <Link
            to="/"
            className="block mt-8 text-right text-[#6d5328] hover:text-[#bc9756] dark:text-gray-300 hover:dark:text-gray-400 font-bold cursor-pointer"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}
