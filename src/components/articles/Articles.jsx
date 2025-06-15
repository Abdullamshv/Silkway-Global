import React from "react";
import { useTranslation } from "react-i18next";
import { ArticlesList } from "./ArticlesList";

export default function Articles() {
  const { t } = useTranslation();

  return (
    <div
      id="articles"
      className="bg-[#D1E8FF] font-[Montserrat] flex flex-col w-full py-12 px-4 sm:px-6"
    >
      <h1 className="title mb-8 text-center">{t("articles.title")}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {ArticlesList.map((article) => (
          <div
            key={article.id}
            className="bg-[#A8D6FF] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={article.image}
                alt="article"
                className="w-full h-48 sm:h-40 object-fit"
              />
            </a>
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h1 className="text-lg font-bold text-black">
                {t(`articles.${article.key}.title`)}
              </h1>
              <p className="text-sm text-gray-700">
                {t(`articles.${article.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
