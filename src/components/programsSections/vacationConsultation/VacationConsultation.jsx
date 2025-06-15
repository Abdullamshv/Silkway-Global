import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ConsultForm from "../../heroSection/ConsultForm";
import airportImage from "../../../assets/vacationConsultation/airportImg.jpg";
import arrow from "../../../assets/vacationConsultation/arrow.svg";

export default function VacationConsultation() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { t } = useTranslation();

  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };

  return (
    <>
      <section className="bg-[#D1E8FF] font-[Montserrat] w-full py-12 px-4 flex flex-col items-center">
        <h1 className="title text-center mb-10">
          {t("vacation.titleLine1")} <br /> {t("vacation.titleLine2")}
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl">
          <img
            src={airportImage}
            alt="Airport"
            className="w-full lg:w-1/2 h-auto object-cover rounded-xl shadow-md"
          />

          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-6">
            <p className="text-2xl sm:text-3xl font-medium text-[#1D1D1D]">
              {t("vacation.description")}
            </p>
            <img
              src={arrow}
              alt="arrow"
              className="rotate-180 w-10 sm:w-12"
            />
            <button
              onClick={togglePanel}
              className="bg-[#304BAA] border-2 border-[#304BAA] text-white text-xl sm:text-2xl px-6 py-3 rounded-xl hover:bg-white hover:text-[#304BAA] transition-colors"
            >
              {t("vacation.button")}
            </button>
          </div>
        </div>
      </section>

      {isPanelOpen && <ConsultForm closePanel={() => setIsPanelOpen(false)} />}
    </>
  );
}
