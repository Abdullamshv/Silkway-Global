import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import main_image from "./../../assets/heroSection_imgs/main_page_image.svg";
import arrow from "./../../assets/heroSection_imgs/arrow.svg";
import ConsultForm from "./ConsultForm";
import NavBar from "../navBar/NavBar";
import "./../Styles.css";
import WhyUs from "../whyUs/WhyUs";
import About from "../about/About";
import Testimonials from "../testimonials/Testimonials";
import Team from "../team/Team";
import Contacts from "../contacts/Contacts";
import Articles from "../articles/Articles";

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => setIsPanelOpen((prev) => !prev);
  const { t } = useTranslation();

  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col bg-gradient-to-b from-[#A8D6FF] to-[#D7EEFF] overflow-visible">
        <div className="relative w-full z-30">
          <NavBar />
        </div>
        <div className="flex w-full h-full flex-1">
          <div className="w-1/2 flex flex-col items-start justify-center px-8 md:px-12 lg:px-16 space-y-20 z-20 backdrop-blur-sm">
            <div className="space-y-3 font-[Montserrat] select-none">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#304BAA] leading-tight">
                {t("home.title1")} <br />
                {t("home.title2")} <br />
                {t("home.title3")} <br />
                {t("home.title4")}
              </h1>
              <p className="text-lg md:text-xl text-gray-800">
                {t("home.description.line1")} <br />
                {t("home.description.line2")} <br />
                {t("home.description.line3")}
              </p>
            </div>

            <div className="w-auto flex flex-wrap gap-6 font-[Montserrat] text-lg">
              <div className="relative">
                <button
                  onClick={togglePanel}
                  className="bg-[#304BAA] border-2 border-[#304BAA] text-white px-8 py-4 rounded-xl hover:cursor-pointer hover:bg-white hover:text-[#304BAA] transition-colors font-medium"
                >
                  {t("home.button")}
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className="absolute right-0 translate-x-10 bottom-0 translate-y-14 h-full"
                />
              </div>
            </div>
          </div>

          <div className="relative w-1/2 h-full z-10">
            <img
              src={main_image}
              alt="home_image"
              className="hidden sm:block w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <WhyUs />
      <About />
      <Testimonials />
      <Team />
      <Contacts />
      <Articles />

      {isPanelOpen && <ConsultForm closePanel={() => setIsPanelOpen(false)} />}
    </>
  );
}

