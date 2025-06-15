import React from "react";
import { useTranslation } from "react-i18next";
import { TeamList } from "./TeamList";

export default function Team() {
  const { t } = useTranslation();

  return (
    <div
      id="team"
      className="py-6 bg-[#D1E8FF] font-[Montserrat] w-full min-h-screen flex flex-col justify-center items-center"
    >
      <div>
        <h1 className="title">{t("team.title")}</h1>
        <p className="title_text">{t("team.subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-3/4 gap-12 mt-6">
        {TeamList.map((person) => (
          <div key={person.id} className="flex flex-col">
            <img
              src={person.image}
              alt="teacher"
              className="border-2 border-[#A8D6FF] rounded-xl object-contain"
            />
            <div className="flex items-center justify-end w-full hover:cursor-default">
              <div className="flex flex-col justify-center mt-2 items-center text-md">
                <p>{t(`team.members.${person.id}.name`)}</p>
                <p>{t(`team.members.${person.id}.role`)}</p>
              </div>
              <img src={person.icon} alt="flag_icon" className="p-6 scale-180" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
