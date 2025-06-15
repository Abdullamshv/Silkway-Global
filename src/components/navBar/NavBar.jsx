import React, { useState, useEffect, useRef } from "react";
import logo from "./../../assets/navbar/logo.svg";
import menu from "./../../assets/navbar/menu.svg";
import Menu from "../menu/Menu";
import LangMenu from "../lang-menu/LangMenu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const getLangLabel = (langCode) => {
    switch (langCode) {
      case "en":
        return "English";
      case "ru":
        return "Русский";
      case "kk":
        return "Қазақша";
      default:
        return langCode;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="w-full px-6 py-4 bg-transparent z-30">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="scale-150 hover:cursor-pointer" />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2  hover:cursor-default">
              <LangMenu />
              <span className="text-sm font-medium h-full mb-1 text-black ">
                {getLangLabel(i18n.language)}
              </span>
            </div>
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="p-2 ml-2 rounded-lg hover:cursor-pointer hover:bg-blue-100 transition"
              aria-label="Menu"
            >
              <img
                src={menu}
                alt={menuOpen ? "Close" : "Menu"}
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && <div className="fixed inset-0 z-20" onClick={closeMenu} />}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 mt-3 h-1/2 w-64 rounded-xl bg-white/30 backdrop-blur-md z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-start pl-6">
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-blue-100 transition"
          >
            <img
              src={menu}
              alt="Close"
              className="h-6 w-6 hover:cursor-pointer"
            />
          </button>
        </div>
        <Menu />
      </div>
    </>
  );
}
