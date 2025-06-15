import React from "react";
import { WhyUsData } from "./WhyUsData";
import { useTranslation } from "react-i18next";

export default function WhyUs() {
  const { t } = useTranslation();

  return (
    <div id="whyus" className="bg-[#D1E8FF] w-full font-[Montserrat] py-12 px-4 md:px-6">
      <h1 className="title">
        {t("whyUs.title")}
      </h1>
      <div className="mx-auto max-w-8xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {WhyUsData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1B3EC4] rounded-xl p-4 md:p-6 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-h-[180px]"
          >
            <div className="text-white text-justify hover:cursor-default">
              {item.textKeys.map((key, index) => (
                <div className="w-full font-extrabold text-4xl" key={index}>{t(key)}</div>
              ))}
            </div>

            {item.id === 2 && (
              <div className="grid grid-cols-3 gap-6 mt-4">
                {item.image.map((flag, index) => (
                  <img
                    key={index}
                    src={flag}
                    alt=""
                    className="w-8 h-6 object-cover mx-auto"
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
