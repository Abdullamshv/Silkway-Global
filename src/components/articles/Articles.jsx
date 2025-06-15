import React from "react";
import { useTranslation } from "react-i18next";
import { ArticlesList } from "./ArticlesList";

export default function Articles() {
  const { t } = useTranslation();

  return (
    <div
      id="articles"
      className="bg-[#D1E8FF] font-[Montserrat] flex flex-col max-h-screen w-full"
    >
      <h1 className="title">{t("articles.title")}</h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 m-auto">
        {ArticlesList.map((article) => (
          <div
            key={article.id}
            className="h-[300px] block bg-[#A8D6FF] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={article.image}
                alt="article"
                className="w-full h-1/2 object-fit"
              />
            </a>
            <h1 className="text-xl font-bold py-2">
              {t(`articles.${article.key}.title`)}
            </h1>
            <p>{t(`articles.${article.key}.description`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
