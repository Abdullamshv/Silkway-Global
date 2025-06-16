import React from "react";
import { useTranslation } from "react-i18next";

import cambridge from "../../../assets/programs/cambridge_logo.svg";
import prague from "../../../assets/programs/prague_language_institute.svg";
import apu from "../../../assets/programs/apu.svg";

const logos = {
  uk: cambridge,
  czechia: prague,
  malaysia: apu,
};

export default function Colleges({ country = "uk" }) {
  const { t } = useTranslation();

  const feedback = t(`colleges.feedbacks.${country}`, { returnObjects: true });
  const logo = logos[country];

  return (
    <section className="bg-[#D1E8FF] w-full font-[Montserrat] py-10 px-4 flex flex-col lg:flex-row items-center justify-center gap-6">
      {/* Logo Card */}
      <div className="bg-[#A8D6FF] rounded-2xl w-full max-w-md flex flex-col items-center justify-between p-6 text-center">
        <h1 className="bg-[#1B3EC4] text-white text-xl sm:text-2xl font-bold rounded-xl px-4 py-2 mb-4 w-full">
          {t("colleges.title")}
        </h1>
        <img src={logo} alt={country} className="h-24 object-contain w-full scale-130" />
      </div>

      {/* Feedback Card */}
      <div className="bg-[#A8D6FF] rounded-2xl w-full max-w-md flex flex-col justify-between p-6 text-center">
        <h1 className="bg-[#1B3EC4] text-white text-xl sm:text-2xl font-bold rounded-xl px-4 py-2 mb-4 w-full">
          {t("colleges.feedbackTitle")}
        </h1>
        <p className="text-lg sm:text-xl text-[#000000] mb-4">
          "{feedback.text}"
        </p>
        <p className="text-sm text-right text-gray-700 whitespace-pre-line">
          {feedback.author}
        </p>
      </div>
    </section>
  );
}
