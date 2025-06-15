import React from "react";
import whatsapp from "../../assets/icons/whatsapp.svg";
import instagram from "../../assets/icons/Instagram.svg";
import linkedin from "../../assets/icons/Linkedin.svg";
import youtube from "../../assets/icons/Youtube.svg";
import phone from "../../assets/icons/Phone.svg";
import Location from "./Location";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="py-6 bg-[#D1E8FF] font-[Montserrat] w-full max-h-screen flex justify-center items-start">
      <div className="bg-[#A8D6FF] rounded-2xl w-4/5 flex flex-col">
        <div className="rounded-xl w-full h-full flex justify-between">
          <div className="flex items-center justify-center w-2/3">
            <h1 className="text-4xl font-bold text-[#304BAA]">
              Silkway Global <br /> {t("contacts.title")}
            </h1>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center">
            <div className="flex flex-row justify-evenly w-1/2 scale-160 py-3">
              <a
                href="https://wa.me/77715993843"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a
                href="https://www.instagram.com/silkway_global1?igsh=cmVuZDVyb3ZkenQ3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/silkwayglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://youtube.com/@silkwayglobal?si=xF254FpEQxSRcyHx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="youtube" />
              </a>
            </div>

            <div className="text-[#304BAA] text-2xl flex flex-col hover:cursor-default text-center">
              <p>{t("contacts.addressLabel")}</p>
              <p>{t("contacts.address")}</p>
            </div>
            <div className="flex text-2xl hover:cursor-default items-center">
              <img src={phone} alt="phone" className="scale-150 mx-3" />
              <a>{t("contacts.phone")}</a>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <Location />
        </div>
      </div>
    </div>
  );
}
