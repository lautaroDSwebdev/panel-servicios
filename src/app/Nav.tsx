"use client";
import React, { useContext, useEffect, useState } from "react";
import { langCotext } from "./_context/LangContext";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiCarouselView } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
export const Nav = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const titulo_nav = data.data.tituloNavbar;
  const nav_carrusel = data.data.navCarrusel,
    nav_mapa = data.data.navMapa,
    nav_prods = data.data.navCatalogo;
  const func_lang = data.HandleLanguage;

  const [darklight, setDarklight] = useState("dark");
  const [first, setfirst] = useState(true)

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
    <section>

      <div className={`${first ?  "translate-x-[-12rem]" : "translate-x-[0]"} w-[16rem] 
      fixed top-0 bottom-0 left-0   transition-all .2s ease-in-out
        xl:flex xl:flex-col   justify-center p-[1rem] bg-[#393676]  dark:bg-[#e0deff] rounded-3xl z-[900]`}>


        <div className="w-full flex justify-end py-[1rem]">
          {
            first ?  
            <IoIosArrowForward onClick={() => setfirst(!first)} className="h-auto w-[2rem] text-[#fff] dark:text-[#000]  cursor-pointer"/>
            : 
            <IoIosArrowBack onClick={() => setfirst(!first)} className="h-auto w-[2rem] text-[#fff] dark:text-[#000]  cursor-pointer"/>
          }
        </div>
        <div className={`${" h-[30%] flex items-center px-[1rem]" } `}>
          <div className="flex flex-col gap-[2rem] ">
            {/* <b className="text-[#fff] dark:text-[#585757]">{titulo_nav}</b> */}
            <button
              className="cursor-pointer max-w-fit p-[3px_1rem] rounded-[10px] 
          bg-[#555252] text-[#fff] dark:text-[#4b4949] dark:bg-[#fff]"
              onClick={themeFunction}
            >
              {darklight === "dark" ? "light" : "dark"}
            </button>

            <select
              onChange={func_lang}
              className="bg-[#555252] text-[#fff]
        max-w-fit p-[3px_1rem] rounded-[10px] cursor-pointer
        dark:text-[#4b4949] dark:bg-[#fff]"
            >
              <option value="es">español</option>
              <option value="en">english</option>
              <option value="po">portuguese</option>
            </select>
            <a className="text-[#fff] dark:text-[#4b4949] " href="#carrusel">
              {/* {nav_carrusel} */}
              <RiCarouselView onClick={() => setfirst(!first)} className="h-[3rem] w-[3rem]"/>
            </a>
            <a className="text-[#fff]  dark:text-[#4b4949] " href="#mapa">
              <FaMapMarkedAlt onClick={() => setfirst(!first)} className="h-[3rem] w-[3rem]"/>
              {/* {nav_mapa} */}
            </a>
            <a className="text-[#fff]  dark:text-[#4b4949] " href="#catalogo">
              <RiShoppingCartFill onClick={() => setfirst(!first)} className="h-[3rem] w-[3rem] "/>
              {/* {nav_prods} */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
