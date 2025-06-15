import React from "react";
import { useTranslation } from "react-i18next";
import image from "./../../assets/about/about-image.svg";

export default function About() {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="bg-[#D1E8FF] font-[Montserrat] py-10 px-4 sm:px-6 lg:px-8 w-full"
    >
      <h1 className="title text-center mb-8">{t("aboutUs")}</h1>

      <div className="bg-[#A8D6FF] rounded-2xl shadow-lg max-w-6xl mx-auto p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="about-image"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 h-full font-semibold text-base sm:text-lg md:text-xl w-full md:w-1/2">
          <h2 className="font-bold text-xl sm:text-2xl">
            {t("aboutUsTagline")}
          </h2>
          <p>{t("experience")}</p>
          <p>{t("programs")}</p>
          <ul className="list-disc ml-5 sm:ml-8">
            <li>{t("destinations.cambridge")}</li>
            <li>{t("destinations.europe")}</li>
            <li>{t("destinations.malaysia")}</li>
            <li>{t("destinations.dubai")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
