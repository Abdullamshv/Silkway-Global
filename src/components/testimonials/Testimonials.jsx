import React from "react";
import { TestData } from "./TestimonialsData";
import { useTranslation } from "react-i18next";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      id="feedbacks"
      className="px-4 sm:px-6 lg:px-8 bg-[#D1E8FF] font-[Montserrat] w-full flex flex-col gap-12"
    >
      {/* Заголовок */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="title text-2xl sm:text-3xl md:text-4xl">
          {t("testimonialsTitle")}
        </h1>
        <p className="title_text text-base sm:text-lg">
          {t("testimonialsSubtitle")}
        </p>
      </div>


      <div className="lg:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="w-full h-90 px-2 "
        >
          {TestData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-[#A8D6FF] w-[90%] h-[90%] mx-auto rounded-3xl p-6 flex flex-col justify-between text-center shadow-md">
                <p className="text-[#000000] text-sm mb-4 text-justify">
                  "{t(testimonial.textKey)}"
                </p>
                <div className="flex flex-col items-end">
                  <p className="font-medium text-[#000000] text-sm">
                    {testimonial.authorKey ? t(testimonial.authorKey) : ""}
                  </p>
                  <p className="text-gray-600 text-xs italic">
                    {testimonial.roleKey ? t(testimonial.roleKey) : ""}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <div className="hidden lg:flex flex-wrap justify-center gap-6">
        {TestData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#A8D6FF] w-full max-w-[320px] rounded-3xl p-6 flex flex-col justify-between text-center shadow-md"
          >
            <p className="text-[#000000] text-sm sm:text-base mb-4 text-justify">
              "{t(testimonial.textKey)}"
            </p>
            <div className="flex flex-col items-end">
              <p className="font-medium text-[#000000] text-sm sm:text-base">
                {testimonial.authorKey ? t(testimonial.authorKey) : ""}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm italic">
                {testimonial.roleKey ? t(testimonial.roleKey) : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
