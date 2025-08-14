"use client";
import React, { useContext, useEffect, useState } from "react";
import { langCotext } from "./_context/LangContext";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoIosArrowBack } from "react-icons/io";
import { RiCarouselView } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa6";
export const Nav = () => {
  const data = useContext(langCotext);
  if (!data) return null;
 
  const func_lang = data.HandleLanguage;

  const [darklight, setDarklight] = useState("dark");
  const [first, setfirst] = useState(true);

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
  const navLinks = [
    {
      id: 1,
      href: "carrusel",
      Icon: RiCarouselView,
      // label: nav_carrusel,
    },
    {
      id: 2,
      href: "mapa",
      Icon: FaMapMarkedAlt,
      // label: nav_mapa,
    },
    {
      id: 3,
      href: "catalogo",
      Icon: RiShoppingCartFill,
      // label: nav_prods,
    },
    {
      id: 4,
      href: "formulario",
      Icon: FaWpforms,
      // label: nav_prods,
    },
  ];
  const [activeSection, setActiveSection] = useState("");

  // Scroll spy: detecta la sección activa
  useEffect(() => {
    const handleScroll = () => {
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].href);
        if (section) {
          const rect = section.getBoundingClientRect();
         
          if (rect.top <= 200 && rect.bottom >= 560) {
            
            setActiveSection(navLinks[i].href);
            break;
          }
       
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <section className="md:block hidden">
      <div
        className={`${
          first ? "translate-x-[-12rem]" : "translate-x-[0] "
        } w-[16rem] 
      fixed top-0 bottom-0 left-0    transition-all .2s ease-in-out
        xl:flex xl:flex-col   justify-center p-[1rem] bg-[#393676ce] backdrop-blur-[10px]  dark:bg-[#e0deff] rounded-3xl z-[900]`}
      >
        <div className="w-full flex justify-end py-[1rem]">
          {first ? (
            <IoIosArrowForward
              onClick={() => setfirst(!first)}
              className="h-auto w-[2rem] text-[#fff] dark:text-[#000]  cursor-pointer"
            />
          ) : (
            <IoIosArrowBack
              onClick={() => setfirst(!first)}
              className="h-auto w-[2rem] text-[#fff] dark:text-[#000]  cursor-pointer"
            />
          )}
        </div>
        <div className={`${" h-[80%] flex items-center px-[1rem]"} `}>
          <div className="flex flex-col gap-[2rem] ">
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
            {navLinks.map(({ href, Icon }) => (
              <a
                key={href}
                className={`p-[.5rem] w-fit bg-[#9b97f0] rounded-4xl ${activeSection === href 
                    ? "bg-[#6661c2] rounded-4xl "
                    : "text-[#000000]"}`}
                href={`#${href}`}
              >
                <Icon
                  onClick={() => setfirst(!first)}
                  className={`h-[4rem] w-[4rem] dark:text-[#ffffff] text-[#fff] `}
                />

                {/* {label} */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
