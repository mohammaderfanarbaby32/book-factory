import React from "react";

function BannerImages() {
  return (
    <section className="relative max-w-6xl mx-auto w-full p-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8">
        <img
          src="../icons/box1.png"
          alt="بنر ۱"
          className="w-full sm:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="../icons/box2.png"
          alt="بنر ۲"
          className="w-full sm:w-1/2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}

export default BannerImages;
