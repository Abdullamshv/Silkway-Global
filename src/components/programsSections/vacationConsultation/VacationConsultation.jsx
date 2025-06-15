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
      <div className="bg-[#D1E8FF] font-[Montserrat] min-h-screen w-full flex flex-col items-center">
        <h1 className="title text-center">
          {t("vacation.titleLine1")} <br /> {t("vacation.titleLine2")}
        </h1>
        <div className="flex w-full items-start">
          <img
            src={airportImage}
            alt="Airport"
            className="w-1/2 object-contain rounded-xl"
          />

          <div className="w-1/2 flex flex-col items-start justify-center gap-8 px-8 py-12">
            <p className="text-4xl font-medium text-[#1D1D1D]">
              {t("vacation.description")}
            </p>
            <img
              src={arrow}
              alt="arrow"
              className="rotate-180 scale-300"
            />
            <button
              onClick={togglePanel}
              className="bg-[#304BAA] border-2 border-[#304BAA] text-white text-4xl ml-6 px-6 py-3 rounded-xl hover:cursor-pointer hover:bg-white hover:text-[#304BAA] transition-colors font-medium"
            >
              {t("vacation.button")}
            </button>
          </div>
        </div>
      </div>
      {isPanelOpen && <ConsultForm closePanel={() => setIsPanelOpen(false)} />}
    </>
  );
}
