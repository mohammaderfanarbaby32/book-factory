import React, { useState } from "react";

const CartPage = () => {
  const cartIsEmpty = true; // در آینده این مقدار باید از سبد خرید واقعی بیاد

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    paymentMethod: "online",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartIsEmpty) {
      alert("سفارش شما ثبت شد!");
    }
  };

  return (
    <div className="bg-[#f9f2e8] dark:bg-[#1e1e1e] min-h-screen transition-colors duration-300 font-iranyekan">
      {/* نوار مسیر */}
      <div className="px-4 sm:px-6 md:px-12 py-6 text-sm text-right text-gray-700 dark:text-gray-300">
        خانه / <span className="text-gray-900 dark:text-white font-bold">ثبت سفارش</span>
      </div>

      {/* محتوای سبد خرید */}
      <div className="max-w-5xl mx-auto mt-6 bg-white dark:bg-[#2a2a2a] rounded-xl p-6 sm:p-10 lg:p-14 text-center shadow-md dark:shadow-lg transition">
        {cartIsEmpty ? (
          <>
            <img
              src="../image/shoppingcart-image.png"
              alt="سبد خرید خالی"
              className="mx-auto w-40 sm:w-48 md:w-60 opacity-60 mb-6"
            />
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8">
              سبد خرید شما خالی است!
            </p>
          </>
        ) : (
          <p className="text-lg font-semibold text-[#882E1B] mb-6">
            لطفاً اطلاعات خود را برای ثبت سفارش وارد کنید
          </p>
        )}

        {/* فرم ثبت سفارش */}
        <form onSubmit={handleSubmit} className="space-y-4 text-right max-w-md mx-auto" disabled={cartIsEmpty}>
          <div>
            <label className="block mb-1 font-medium">نام و نام خانوادگی</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              disabled={cartIsEmpty}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#882E1B] disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">شماره تماس</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              disabled={cartIsEmpty}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#882E1B] disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">آدرس پستی</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              disabled={cartIsEmpty}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#882E1B] disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">روش پرداخت</label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              disabled={cartIsEmpty}
              className="w-full p-2 border border-gray-300 rounded-md disabled:opacity-50"
            >
              <option value="online">پرداخت آنلاین</option>
              <option value="cash">پرداخت در محل</option>
              <option value="installment">پرداخت اقساطی</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={cartIsEmpty}
            className="w-full bg-[#882E1B] hover:bg-[#772819] text-white py-3 rounded-md font-bold transition disabled:opacity-50"
          >
            ثبت نهایی سفارش
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartPage;
