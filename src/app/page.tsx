"use client";
import { useContext } from "react";
import { Nav } from "./Nav";
import { langCotext } from "./_context/LangContext";
import { Carrusel } from "./Carrusel";
import { Mapa } from "./Mapa";
import { CatalogoProds } from "./CatalogoProds";

export default function Home() {
  const data = useContext(langCotext);
  if (!data) return null;
  const info = data.data.tituloPagina;
  return (
    <div
      className="mx-auto   dark:bg-[#d5d7dd] bg-[#323d5a] "
    >
      <Nav />
      <h2 className="text-[#fff] dark:text-[#302b2b] text-[2rem] font-bold max-width mx-auto flex justify-center">
        {info}
      </h2>
      <Carrusel />
      <Mapa />
      <CatalogoProds />
    </div>
  );
}
