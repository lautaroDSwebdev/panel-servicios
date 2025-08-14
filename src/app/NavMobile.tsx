"use client";
import React, { useContext, useEffect, useState } from "react";
import { langCotext } from "./_context/LangContext";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiCarouselView } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa6";
export const NavMobile = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const titulo_nav = data.data.tituloNavbar;
  const nav_carrusel = data.data.navCarrusel,
    nav_mapa = data.data.navMapa,
    nav_prods = data.data.navCatalogo;
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
    <section className="block md:hidden">
      <div
        className={` 
      fixed top-0  left-[10px] right-[10px]    transition-all .2s ease-in-out
        xl:flex xl:flex-col   justify-center p-[4px] bg-[#393676]  dark:bg-[#e0deff] rounded-3xl z-[900]`}
      >
        <div className="w-full flex justify-end p-[1rem]">
          {first ? (
            <IoIosArrowDown
              onClick={() => setfirst(!first)}
              className="h-auto w-[2rem] text-[#fff] dark:text-[#000]  cursor-pointer"
            />
          ) : (
            <IoIosArrowUp
              onClick={() => setfirst(!first)}
              className="h-auto w-[2rem] text-[#fff] dark:text-[#000]  cursor-pointer"
            />
          )}
        </div>

      <div
        className={`${first ? "translate-y-[-44rem] opacity-0 transition-all 4s ease" : "translate-y-[79px] opacity-100 transition-all 4s ease"} 
      fixed top-0  left-[10px] right-[10px]    
        xl:flex xl:flex-col   justify-center p-[1rem] bg-[#393676]    dark:bg-[#e0deff] z-[0] rounded-3xl`}
      >
        <div
          className={`${" h-fit flex items-center px-[1rem] justify-center"} `}
        >
          <div className="flex flex-col gap-[2rem] ">
            <section className="flex justify-between">
              <button
                className="cursor-pointer max-w-fit p-[3px_1rem] rounded-[10px] 
              bg-[#555252] text-[#fff] dark:text-[#4b4949] dark:bg-[#fff] text-[1.2rem]"
                onClick={themeFunction}
              >
                {darklight === "dark" ? "🌛" : "🌞"}
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
            </section>
            <div className="flex gap-[2rem] w-full">
              {navLinks.map(({ href, Icon }) => (
                <a
                  key={href}
                  className={`p-[.5rem] w-fit bg-[#9b97f0] hover:bg-[#6661c2] rounded-4xl ${
                    activeSection === href
                      ? "bg-[#6661c2] rounded-4xl  "
                      : "text-[#000000]"
                  }`}
                  href={`#${href}`}
                >
                  <Icon
                    onClick={() => setfirst(!first)}
                    className={`h-[2rem] w-[2rem] dark:text-[#ffffff] text-[#fff] `}
                  />

                  {/* {label} */}
                </a>
              ))}
            </div>
          </div>
        </div>
       
      </div>
      
      </div>
    </section>
  );
};
