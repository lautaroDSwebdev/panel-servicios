import React, { useContext } from "react";
import { langCotext } from "./_context/LangContext";
import { prods } from "./_mock/prods";

export const CatalogoProds = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const titulo_catalogo = data.data.tituloCatalogoProds;
  return (
    <div id="catalogo" className="min-h-[50vh] lg:min-h-[80vh]  w-full p-[4rem_5rem] sm:p-[8rem_5rem]">
      <section className="max-width mx-auto">
        <h2 className="text-[#fff] dark:text-[#302b2b] text-[1.4rem] decoration-solid underline p-[2rem]
         text-center sm:p-[2rem] lg:text-[2rem] font-semibold">
          {titulo_catalogo}
        </h2>
        <article className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] 
         
          gap-[2rem] justify-center ">
          {prods.map((e) => (
            <div key={e.id} className="bg-[#393676] dark:bg-[#e0deff] rounded-3xl p-[1.5rem] flex flex-col  items-center overflow-hidden">
                <img className="h-auto w-[15rem] rounded-3xl hover: relative opacity-85 cursor-pointer aspect-[1/1]
                hover:opacity-100 transition-all ease-in-out .3s scale-100 hover:scale-105 " src={e.img} alt={e.imgAlt} />
                <p className="p-[5px] dark:text-[#494747] text-[#fff] text-center">{e.desc}</p>
                <p className="p-[5px] dark:text-[#000] font-bold text-[#fff] text-[1.3rem]">${e.precio}</p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};
// .g-div_imgProd {
//   display: flex;
//   justify-content: center;
//   overflow: hidden;
//   img {
//     position: relative;
//     height: 11rem;
//     width: 14rem;
//     cursor: pointer;
//     opacity: 0.6;
//     transition: all 0.5s ease-out;
//     z-index: 300;
//     &:hover {
//       transition: all 0.5s ease-out;
//       rotate: 2deg;
//       opacity: 1;
//       scale: 1.2;
//     }
//   }
// }