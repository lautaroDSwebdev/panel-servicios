import React, { useContext } from "react";
import { langCotext } from "./_context/LangContext";

export const Mapa = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const info_mapa = data.data.tituloMapa
  return (
    <div id="mapa" className="min-h-[100vh]  w-full p-[5rem]">
      <section className="max-width mx-auto flex justify-center flex-col">
      <h2 className="text-[#fff] dark:text-[#302b2b] text-[1.2rem] font-semibold text-center p-[2rem]">{info_mapa}</h2>
        <iframe className="max-width"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50767.581367801475!2d-59.183901690669316!3d-37.31944744844603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b2733946f%3A0xceef2c76899c202d!2sTandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1752972572132!5m2!1ses!2sar"
          width="900"
          height="400"
          
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
