import { useTranslation } from "react-i18next";

export const useMenuData = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("menu.whyus"),
      link: "/#whyus",
    },
    {
      title: t("menu.about"),
      link: "/#about",
    },
    {
      title: t("menu.feedbacks"),
      link: "/#feedbacks",
    },
    {
      title: t("menu.team"),
      link: "/#team",
    },
    {
      title: t("menu.articles"),
      link: "/#articles",
    },
    {
      title: t("menu.programs"),
      link: "#",
      submenu: [
        {
          title: t("programsSub.malaysia"),
          link: "/programs/malaysia",
        },
        {
          title: t("programsSub.czechia"),
          link: "/programs/czechia",
        },
        {
          title: t("programsSub.uk"),
          link: "/programs/uk",
        },
      ],
    },
  ];
};
