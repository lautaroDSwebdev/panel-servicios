import React from "react";
import { socialLinks } from "./_mock/dataLinks";

export const Footer = () => {
  return (
    <footer className=" text-white p-[7rem_1rem]  bg-[#1e1d3b]  dark:bg-[#c4c1f0] ">
      <div className="max-width mx-auto flex flex-row justify-between gap-8 px-4">
        {/* Columna izquierda: navegación */}
        {/* <div className="flex-1 flex flex-col gap-2">
          <h4 className="font-bold mb-2">Navegación</h4>
          {navLinks.map((e) => (
            <a key={e.id} href={e.href} className="hover:underline w-fit">
              {e.option}
            </a>
          ))}
        </div> */}
        {/* Columna derecha: redes sociales */}
        <div className="flex-1 flex flex-col gap-2 items-center">
          <h4 className="font-bold mb-2 text-[#fffafa] dark:text-[#1a1818]">Redes Sociales</h4>
          <div className="flex flex-col md:flex-row gap-1 md:gap-[2rem]">
            {socialLinks.map((e) => (
              <a key={e.id} className="text-[#ffffff] hover:text-[#8a8989]
               dark:text-[#000] dark:hover:text-[#fff] text-[1.2rem] font-bold" href={e.href} target="_blank">
                {e.label}
              </a>
            ))}
            {/* Agrega más redes si quieres */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center  text-[#ffffff] dark:text-[#000] text-[1.2rem]">
        &copy; {new Date().getFullYear()} Lautaro Di Salvo  
        <br className="" />
          Todos los derechos
        reservados.
      </div>
    </footer>
  );
};
