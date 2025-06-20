import React from "react";
import { useTranslation } from "react-i18next";
import { TeamList } from "./TeamList";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Team() {
  const { t } = useTranslation();

  return (
    <section
      id="team"
      className="w-full bg-[#D1E8FF] py-12 px-4 sm:px-6 lg:px-8 font-[Montserrat] flex flex-col items-center"
    >
      {/* Заголовок */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#304BAA]">
          {t("team.title")}
        </h2>
        <p className="mt-2 text-base sm:text-lg text-gray-700">
          {t("team.subtitle")}
        </p>
      </div>

      {/* Mobile Swiper */}
      <div className="w-full flex items-center justify-center lg:hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1.2}
          loop
          grabCursor
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="h-80 px-2 "
        >
          {TeamList.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="w-full flex flex-col items-center">
                <img
                  src={person.image}
                  alt={t(`team.members.${person.id}.name`)}
                  className="w-36 h-36 object-cover rounded-xl border-2 border-blue-300 mb-4"
                />
                <div className="flex">
                  <div className=" text-center space-y-1">
                    <p className="text-[#304BAA] font-semibold text-base">
                      {t(`team.members.${person.id}.name`)}
                    </p>
                    <p className="text-gray-600 text-sm italic">
                      {t(`team.members.${person.id}.role`)}
                    </p>
                  </div>
                  <img src={person.icon} alt="flag" className="w-6 h-6 mt-2" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {TeamList.map((person) => (
          <div
            key={person.id}
            className=" p-5  flex flex-col items-center"
          >
            <img
              src={person.image}
              alt={t(`team.members.${person.id}.name`)}
              className="w-full max-w-[200px] h-[200px] object-cover rounded-xl border-2 border-[#A8D6FF] mb-4"
            />
            <div className="text-center space-y-1">
              <p className="text-[#304BAA] font-semibold text-base">
                {t(`team.members.${person.id}.name`)}
              </p>
              <p className="text-gray-600 text-sm italic">
                {t(`team.members.${person.id}.role`)}
              </p>
            </div>
            <img src={person.icon} alt="flag" className="w-6 h-6 mt-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
