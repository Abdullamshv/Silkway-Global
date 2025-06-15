import React from "react";
import { useTranslation } from "react-i18next";
import { TeamList } from "./TeamList";

export default function Team() {
  const { t } = useTranslation();

  return (
    <div
      id="team"
      className="py-10 px-4 sm:px-6 lg:px-8 bg-[#D1E8FF] font-[Montserrat] w-full flex flex-col items-center"
    >
      {/* Заголовок */}
      <div className="text-center mb-10">
        <h1 className="title text-2xl sm:text-3xl md:text-4xl">
          {t("team.title")}
        </h1>
        <p className="title_text text-base sm:text-lg">
          {t("team.subtitle")}
        </p>
      </div>

      {/* Сетка участников */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 w-full max-w-7xl">
        {TeamList.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <img
              src={person.image}
              alt="team_member"
              className="border-2 border-[#A8D6FF] rounded-xl w-full max-w-[250px] h-auto object-cover"
            />
            <div className="flex items-center justify-center mt-4 gap-2">
              <div className="text-center">
                <p className="font-semibold text-sm sm:text-base">
                  {t(`team.members.${person.id}.name`)}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm">
                  {t(`team.members.${person.id}.role`)}
                </p>
              </div>
              <img
                src={person.icon}
                alt="flag_icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
