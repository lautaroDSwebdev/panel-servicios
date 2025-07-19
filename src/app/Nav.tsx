"use client";
import React, { useContext, useEffect, useState } from "react";
import { langCotext } from "./_context/LangContext";

export const Nav = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const titulo_nav = data.data.tituloNavbar;
  const func_lang = data.HandleLanguage;

  const [darklight, setDarklight] = useState("dark");

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (!htmlElement) return;
    if (darklight === "light") {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
    }
  }, [darklight]);

  const themeFunction = () => {
    setDarklight((preVtheme) => (preVtheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 w-[17rem] p-[2rem] bg-[#1a244d] dark:bg-[#c1c6df] z-[900]">
      <div className="flex flex-col gap-3">
        <b className="text-[#fff] dark:text-[#585757]">{titulo_nav}</b>
        <button
          className="cursor-pointer max-w-fit p-[3px_1rem] rounded-[10px]
           bg-[#555252] text-[#fff] dark:text-[#4b4949] dark:bg-[#fff]"
          onClick={themeFunction}
        >
          {darklight === "dark" ? "light" : "dark"}
        </button>
        <select onChange={func_lang} className="bg-[#555252] text-[#fff]
        max-w-fit p-[3px_1rem] rounded-[10px] cursor-pointer
         dark:text-[#4b4949] dark:bg-[#fff]">
          <option value="es">
            español
          </option>
          <option value="en">
            english
          </option>
          <option value="po">
            portuguese
          </option>
        </select>
      </div>
    </div>
  );
};
