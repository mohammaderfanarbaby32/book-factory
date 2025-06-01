import React, { useState } from "react";
import { CheckCircle, Clock, PackageCheck, Truck, Box } from "lucide-react";

const stepIcons = [<Clock />, <Box />, <Truck />, <PackageCheck />];

const allOrders = [
  { id: "123456", status: { stateIndex: 2, steps: [ { label: "ثبت سفارش", date: "۱۴۰۳/۰۳/۱۱" }, { label: "بسته‌بندی", date: "۱۴۰۳/۰۳/۱۲" }, { label: "ارسال", date: null }, { label: "تحویل داده شده", date: null } ] } },
  { id: "987654", status: { stateIndex: 3, steps: [ { label: "ثبت سفارش", date: "۱۴۰۳/۰۳/۰۵" }, { label: "بسته‌بندی", date: "۱۴۰۳/۰۳/۰۶" }, { label: "ارسال", date: "۱۴۰۳/۰۳/۰۷" }, { label: "تحویل داده شده", date: "۱۴۰۳/۰۳/۰۸" } ] } },
];

function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const isLoggedIn = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId) {
      setError("شماره سفارش را وارد کنید.");
      return;
    }

    const foundOrder = allOrders.find((order) => order.id === orderId.trim());
    if (foundOrder) {
      setError("");
      setStatus(foundOrder.status);
    } else {
      setStatus(null);
      setError("سفارشی با این شماره پیدا نشد.");
    }
  };

 const renderTimeline = (status) => (
  <div className="mt-10 bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
    <h2 className="text-lg font-bold mb-6 text-[#882E1B] dark:text-yellow-400">وضعیت سفارش شما</h2>

    {/* نوار درصد پیشرفت */}
    <div className="w-full bg-gray-200 rounded-full h-4 mb-10 dark:bg-gray-700">
      <div
        className="bg-[#882E1B] h-4 rounded-full transition-all"
        style={{ width: `${((status.stateIndex + 1) / status.steps.length) * 100}%` }}
      ></div>
    </div>

    {/* تایم‌لاین عمودی با آیکون‌ها */}
    <div className="relative">
      <div className="absolute right-4 top-0 bottom-0 w-[2px] bg-[#882E1B] dark:bg-orange-400"></div>

      <div className="space-y-8">
        {status.steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 pr-10 relative">
            {/* دایره آیکون */}
            <div className="relative z-10">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                  index <= status.stateIndex ? "bg-[#882E1B]" : "bg-gray-400 dark:bg-gray-600"
                }`}
              >
                {stepIcons[index]}
              </div>
            </div>

            {/* متن مرحله */}
            <div>
              <p className="font-semibold text-base">
                {step.label}
                {index <= status.stateIndex && (
                  <span className="ml-2 text-green-600 text-sm align-middle">✔</span>
                )}
              </p>
              {step.date && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  تاریخ: {step.date}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-10 text-center font-iranyekan text-gray-800 dark:text-gray-200">
        <p className="text-lg">برای پیگیری سفارش ابتدا وارد حساب کاربری خود شوید.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 text-right font-iranyekan text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-[#882E1B] dark:text-orange-400">📦 پیگیری سفارش</h1>

      {/* فرم پیگیری سفارش */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#fdf6f2] dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-xl mx-auto mb-12"
      >
        <label className="block mb-2 font-semibold">شماره سفارش</label>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#882E1B]"
          placeholder="مثلاً 123456"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-[#882E1B] text-white px-6 py-2 rounded hover:bg-[#772819] transition"
        >
          بررسی سفارش
        </button>
      </form>

      {/* لیست سفارش‌های قبلی */}
      <div className="max-w-2xl mx-auto mb-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">سفارشات اخیر شما</h3>
        <div className="space-y-4">
          {allOrders.map((order) => (
            <div
              key={order.id}
              onClick={() => {
                setOrderId(order.id);
                setStatus(order.status);
              }}
              className="cursor-pointer p-4 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <p className="text-sm">
                سفارش شماره: <span className="font-bold">{order.id}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                وضعیت فعلی: {order.status.steps[order.status.stateIndex].label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* نمایش وضعیت */}
      {status && renderTimeline(status)}
    </div>
  );
}

export default OrderTracking;
