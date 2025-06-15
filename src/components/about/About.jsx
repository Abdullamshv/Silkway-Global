import React from "react";
import { useTranslation } from "react-i18next";
import image from "./../../assets/about/about-image.svg";

export default function About() {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="bg-[#D1E8FF] font-[Montserrat] max-h-screen w-full flex flex-col"
    >
      <h1 className="title">{t("aboutUs")}</h1>

      <div className="bg-[#A8D6FF] rounded-2xl shadow-lg max-w-6xl mx-auto md:p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="w-1/2">
          <img
            src={image}
            alt="about-image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-10 h-full font-semibold text-xl">
          <h2 className="font-bold text-2xl">{t("aboutUsTagline")}</h2>
          <p>{t("experience")}</p>
          <p>{t("programs")}</p>
          <ul className="list-disc ml-8">
            <li>{t("destinations.cambridge")}</li>
            <li>{t("destinations.europe")}</li>
            <li>{t("destinations.malaysia")}</li>
            <li>{t("destinations.dubai")}</li>
          </ul>
        </div>

        <div></div>
      </div>
    </div>
  );
}
