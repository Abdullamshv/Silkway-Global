import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import BackgroundUK from "../../assets/programs/london.jpg";
import BackgroundMalaysia from "../../assets/programs/malaysia.jpg";
import BackgroundCzechia from "../../assets/programs/czechia.jpg";

import Colleges from "../programsSections/colleges/colleges";
import Information from "../programsSections/information/information";
import CambridgeAlbum from "../programsSections/cambridge_album/CambridgeAlbum";
import VacationConsultation from "../programsSections/vacationConsultation/VacationConsultation";
import NavBar from "../navBar/NavBar";

export default function Programs() {
  const { t } = useTranslation();
  const { country } = useParams();
  const selectedCountry = country?.toLowerCase() || "uk";

  const programData = {
    uk: {
      title: t("programsTitle.uk.title"),
      image: BackgroundUK,
      quote: t("programs.uk.quote"),
    },
    malaysia: {
      title: t("programsTitle.malaysia.title"),
      image: BackgroundMalaysia,
      quote: t("programs.malaysia.quote"),
    },
    czechia: {
      title: t("programsTitle.czechia.title"),
      image: BackgroundCzechia,
      quote: t("programsTitle.czechia.quote"),
    },
  };

  const data = programData[selectedCountry] || programData.uk;

  return (
    <>
      <section
        className="font-[Montserrat] w-full min-h-screen bg-[#94d6ff] flex flex-col items-center"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="w-full ">
          <NavBar />
        </div>

        <div className="flex flex-col justify-start w-4/5   ">
          <h1 className="title" style={{textAlign: "start"}}>{t("programsTitle.mainTitle")}</h1>
          <h1 className="text-6xl text-white font-bold">
            {t(`programsTitle.${selectedCountry}.title`)}
          </h1>
        </div>

        <div className="w-full h-screen bg-cover bg-center mt-6"></div>

        <div className="bg-[#304BAA] text-white text-center pt-4 pb-12 w-full">
          <p className="text-4xl md:text-5xl lg:text-6xl px-4">
            {t(`programsTitle.${selectedCountry}.quote`)}
          </p>
        </div>
      </section>

      <Colleges country={selectedCountry} />
      <Information country={selectedCountry} />
      <CambridgeAlbum country={selectedCountry} />
      <VacationConsultation country={selectedCountry} />
    </>
  );
}
