"use client"
import { useContext } from "react";
import { Nav } from "./Nav";
import { langCotext } from "./_context/LangContext";
import { Carrusel } from "./Carrusel";

export default function Home() {
  const data = useContext(langCotext);
  if (!data) return null;
  const info = data.data.tituloPagina;
  return (
    <div
      className="font-sans grid grid-rows-[20px_1fr_20px] 
    items-center justify-items-center
     min-h-screen p-8 pb-20 gap-16 sm:p-20 dark:bg-[#d5d7dd] bg-[#323d5a] "
    >
      <Nav />
      <h2 className="text-[#fff] dark:text-[#302b2b] text-[2rem] font-bold">
        {info}
      </h2>
      <Carrusel/>
    </div>
  );
}
