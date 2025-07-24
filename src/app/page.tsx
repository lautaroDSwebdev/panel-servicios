"use client";
import { useContext } from "react";
import { Nav } from "./Nav";
import { langCotext } from "./_context/LangContext";
import { Carrusel } from "./Carrusel";
import { Mapa } from "./Mapa";
import { CatalogoProds } from "./CatalogoProds";
import { Footer } from "./Footer";
import { Form } from "./Form";

export default function Home() {
  const data = useContext(langCotext);
  if (!data) return null;
  const info = data.data.tituloPagina;
  return (
    <div id="inicio"
      className="mx-auto   dark:bg-[#f7f7f7] bg-[#1a244d]"
    >
      {/* bg-[#1a244d] dark:bg-[#c1c6df] */}
      <Nav />
      <h2 className="text-[#fff] dark:text-[#302b2b] text-[2rem]
      md:text-[2rem] lg:text-[3rem]  font-bold max-width mx-auto flex justify-center p-[4rem_3rem] sm:p-[8rem_5rem] text-center">
        {info}
      </h2>
      <Carrusel />
      <Mapa />
      <CatalogoProds />
      <Form />
      <Footer />
    </div>
  );
}
