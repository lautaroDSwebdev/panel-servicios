import React, { useContext } from "react";
import { langCotext } from "./_context/LangContext";
import { prods } from "./_mock/prods";

export const CatalogoProds = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const titulo_catalogo = data.data.tituloCatalogoProds;
  return (
    <div id="catalogo" className="min-h-[50vh] lg:min-h-[100vh]  w-full p-[4rem_5rem] sm:p-[8rem_5rem]">
      <section className="max-width mx-auto">
        <h2 className="text-[#fff] dark:text-[#302b2b] text-[1.4rem] decoration-solid underline p-[2rem]
         text-center sm:p-[2rem] lg:text-[2rem] font-semibold">
          {titulo_catalogo}
        </h2>
        <article className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] 
         
          gap-[2rem] justify-center ">
          {prods.map((e) => (
            <div key={e.id} className="bg-[#393676] dark:bg-[#e0deff] rounded-3xl p-[1.5rem] flex flex-col  items-center">
                <img className="h-auto w-[15rem] rounded-3xl hover:object-cover " src={e.img} alt={e.imgAlt} />
                <p className="p-[5px] dark:text-[#000] text-[#fff]">{e.desc}</p>
                <p className="p-[5px] dark:text-[#7a7777] text-[#fff]">${e.precio}</p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};
