import React from 'react';
import BookSlider from "../bookslider";
import BannerImages from "../BannerImages";
import ArticleBanner from "../ArticleBanner";
import NobelBanner from "../NobelBanner"; 
import NewYorkBanner from "../NewYorkBanner";
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import Header from "../Header";



const booksData = [
  {
    id: 1,
    title: "کتاب ۱",
    author: "نویسنده ۱",
    price: "100,000 تومان",
    image: "/images/book1.jpg",
  },
  // ... کتاب‌های دیگر
];

const moreBooksData = [
  {
    id: 10,
    title: "کتاب ۱۰",
    author: "نویسنده ۱۰",
    price: "120,000 تومان",
    image: "/images/book10.jpg",
  },
  // ... کتاب‌های دیگر
];

function HomePage() {
  return (
    <>
    
      <main className="max-w-7xl mx-auto p-4 space-y-12">
        
        <BannerImages />

        <BookSlider
          title="کتاب‌های پرتخفیف تا ۸۰ درصد"
          books={booksData}
          showDiscountImage={true}
        />

        <BookSlider
          title="جدیدترین کتاب‌ها"
          books={moreBooksData}
          showDiscountImage={false}
          showDivider={true}
        />

        <ArticleBanner />

        <BookSlider title="محبوب‌ترین کتاب‌ها" books={booksData} showDivider={true} />
        <BookSlider title="محبوب‌ترین کتاب‌ها" books={booksData} showDivider={true} />

        <NobelBanner />

        <BookSlider title="محبوب‌ترین کتاب‌ها" books={booksData} showDivider={true} />
        <BookSlider title="محبوب‌ترین کتاب‌ها" books={booksData} showDivider={true} />

        <NewYorkBanner />

        <BookSlider title="محبوب‌ترین کتاب‌ها" books={booksData} showDivider={true} />
        <BookSlider title="محبوب‌ترین کتاب‌ها" books={booksData} showDivider={true} />
      </main>

      <Footer /> {/* خارج از main و همچنان در Fragment */}
    </>
  );
}

export default HomePage;
