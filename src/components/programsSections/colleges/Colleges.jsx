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
    <div className="bg-[#D1E8FF] h-[400px] max-h-screen w-full font-[Montserrat] flex items-center justify-center gap-6 hover:cursor-default">
      <div className="rounded-2xl h-[300px] px-6 bg-[#A8D6FF] flex flex-col items-center justify-between w-[500px]">
        <h1 className="rounded-2xl text-center w-[400px] bg-[#1B3EC4] py-2 mt-2 text-white text-2xl">
          {t("colleges.title")}
        </h1>
        <img src={logo} alt={country} className="mx-auto my-auto scale-150" />
      </div>

      <div className="rounded-2xl h-[300px] py-3 px-6 my-3 bg-[#A8D6FF] flex flex-col justify-between w-[500px]">
        <h1 className="rounded-2xl text-center w-[300px] m-auto bg-[#1B3EC4] mt-2 text-2xl text-white">
          {t("colleges.feedbackTitle")}
        </h1>
        <p className="text-center w-3/4 m-auto text-xl">
          "{feedback.text}"
        </p>
        <p className="text-end text-xs whitespace-pre-line">{feedback.author}</p>
      </div>
    </div>
  );
}
