import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import main_image from "./../../assets/heroSection_imgs/main_page_image.svg";
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
      <section className="relative min-h-screen w-full flex flex-col bg-gradient-to-b from-[#A8D6FF] to-[#D7EEFF] overflow-visible font-[Montserrat]">
        <div className="relative w-full z-30">
          <NavBar />
        </div>
        <div className="flex w-full h-full flex-1 flex-col-reverse md:flex-row main-mobile">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-12 lg:px-16 space-y-10 md:space-y-20 z-20 backdrop-blur-sm text-center lg:text-left title-mobile">
            <div className="space-y-3  select-none relative">
              <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-[#304BAA] text-justify">
                {t("home.title1")} <br />
                {t("home.title2")}{" "}
                <span className="hidden lg:inline">
                  {" "}
                  <br />{" "}
                </span>
                {t("home.title3")}{" "}
                <span className="hidden lg:inline">
                  {" "}
                  <br />{" "}
                </span>
                {t("home.title4")}
              </h1>
              <p className="text-content text-xl md:text-2xl text-gray-800">
                {t("home.description.line1")} <br />
                {t("home.description.line2")} <br />
                {t("home.description.line3")}
              </p>
            </div>

            <div className=" flex justify-center md:justify-start">
              <div className="relative w-2xs  ">
                <button
                  onClick={togglePanel}
                  className=" bg-[#304BAA] text-3xl border-2 border-[#304BAA] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:cursor-pointer hover:bg-white hover:text-[#304BAA] transition-colors"
                >
                  {t("home.button")}
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 h-64 sm:h-96 md:h-auto flex justify-center items-center z-10 ip16">
            <img
              src={main_image}
              alt="home_image"
              className="w-4/5 sm:w-full h-full object-contain"
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
