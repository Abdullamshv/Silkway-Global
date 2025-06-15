import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function Information() {
  const { t } = useTranslation();
  const { country = "uk" } = useParams();

  const items = t(`information.${country.toLowerCase()}.items`, {
    returnObjects: true,
  });

  const gradients = [
    "bg-gradient-to-r from-red-600 to-orange-400",
    "bg-gradient-to-r from-sky-300 to-blue-700",
  ];

  return (
    <div className="bg-[#D1E8FF] flex items-center justify-center h-[600px] max-h-screen font-[Montserrat] hover:cursor-default">
      <div className="bg-[#A8D6FF] py-12 w-4/5 rounded-xl flex flex-col items-center">
        <h1 className="rounded-2xl text-center mb-6 w-[300px] bg-[#1B3EC4] text-white text-2xl py-2">
          {t("information.title")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full px-12">
          {items.map((item, index) => {
            const gradientClass = gradients[index % gradients.length];
            return (
              <div
                key={index}
                className={`text-white p-4 rounded-2xl shadow-md text-center  md:text-lg whitespace-pre-line ${gradientClass}`}
              >
                {/* {item.image && (
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-12 h-12 mx-auto mb-3 object-contain"
                  />
                )} */}
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
