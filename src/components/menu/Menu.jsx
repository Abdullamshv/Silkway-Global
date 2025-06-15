import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useMenuData } from "./MenuData";
import SubMenu from "./Programs_Submenu";

export default function Menu() {
  const menuItems = useMenuData();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="font-[montserrat] pb-4">
      {menuItems.map((item, index) => (
        <li key={index} className="relative">
          {item.submenu ? (
            <button
              onClick={() => toggleDropdown(index)}
              className="flex items-center justify-between w-full my-2 px-2 py-2 mx-4 hover:bg-white/20 hover:scale-110 rounded-lg cursor-pointer transition"
            >
              <span>{item.title}</span>
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
          ) : item.link.startsWith("/") ? (
            <HashLink
              smooth
              to={item.link}
              className="block my-2 px-2 py-2 mx-4 hover:bg-white/20 hover:scale-110 rounded-lg cursor-pointer transition"
            >
              {item.title}
            </HashLink>
          ) : (
            <Link
              to={item.link}
              className="block my-2 px-2 py-2 mx-4 hover:bg-white/20 hover:scale-110 rounded-lg cursor-pointer transition"
            >
              {item.title}
            </Link>
          )}

          {item.submenu && (
            <SubMenu items={item.submenu} isOpen={openIndex === index} />
          )}
        </li>
      ))}
    </ul>
  );
}
