import React from "react";
import { WhyUsData } from "./WhyUsData";
import { useTranslation } from "react-i18next";

export default function WhyUs() {
  const { t } = useTranslation();

  return (
    <div
      id="whyus"
      className="bg-[#D1E8FF] w-full font-[Montserrat] py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Заголовок */}
      <h1 className="title text-2xl sm:text-3xl md:text-4xl mb-8 text-center">
        {t("whyUs.title")}
      </h1>

      {/* Сетка карточек */}
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2">
        {WhyUsData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1B3EC4] rounded-xl p-4 sm:p-5 md:p-8 flex flex-col items-center text-center h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl min-h-[180px]"
          >
            <div className="text-white hover:cursor-default space-y-2 ">
              {item.textKeys.map((key, index) => (
                <div
                  key={index}
                  className="font-extrabold text-xl lg:text-3xl  leading-snug"
                >
                  {t(key)}
                </div>
              ))}
            </div>

            {item.id === 2 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {item.image.map((flag, index) => (
                  <img
                    key={index}
                    src={flag}
                    alt="flag"
                    className="w-8 h-6 sm:w-10 sm:h-7 object-cover mx-auto"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
