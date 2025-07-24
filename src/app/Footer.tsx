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
        <div className="flex-1 flex flex-col gap-2 items-end">
          <h4 className="font-bold mb-2 text-[#fff] dark:text-[#000]">Redes Sociales</h4>
          <div className="flex flex-col gap-1">
            {socialLinks.map((e) => (
              <a className="text-[#fff] dark:text-[#000] text-[1.2rem]" href={e.href} target="_blank">
                {e.label}
              </a>
            ))}
            {/* Agrega más redes si quieres */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center  text-[#fff] dark:text-[#000] text-[1.2rem]">
        &copy; {new Date().getFullYear()} Lautaro Di Salvo. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};
