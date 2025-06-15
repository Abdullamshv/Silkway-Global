import React from "react";

export default function SubMenu({ items, isOpen }) {
  if (!isOpen) return null;

  return (
    <ul className="absolute left-4 top-full mt-2 bg-[#ffffff20] backdrop-blur rounded-lg shadow-md w-48 z-50">
      {items.map((subItem, idx) => (
        <li key={idx}>
          <a
            href={subItem.link}
            className="block px-4 py-2 hover:bg-white/30 rounded transition"
          >
            {subItem.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
