import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useContext } from "react";
import { langCotext } from "./_context/LangContext";

export const Carrusel = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const titulo_car = data.data.tituloCarrusel;

  const images = [
    { id: 1, img: "/huy-phan-84Pe9HdcWtE-unsplash.webp" },
    { id: 2, img: "/jakob-owens-qnwN8gMaofs-unsplash.webp" },
    { id: 3, img: "/max-bohme-6aE9Zrfl8oE-unsplash.webp" },
    { id: 4, img: "/micah-sammie-chaffin-Vs3OXyzKUkg-unsplash.webp" },
  ];

  return (
    <div id="carrusel" className="min-h-[50vh] lg:min-h-[100vh]  w-full p-[4rem_5rem] sm:p-[8rem_5rem]  ">
      <section className="max-width mx-auto">
        <h2 className="text-[#fff] dark:text-[#302b2b] text-[1.4rem] decoration-solid underline p-[2rem]
         text-center sm:p-[2rem] lg:text-[2rem] font-semibold">{titulo_car}</h2>
        <Carousel className="">
          <CarouselContent className="">
            {images.map((item) => (
              <CarouselItem className="" key={item.id}>
                <img className="w-[1200px] h-auto rounded-3xl"
                  src={item.img}
                  alt={`Imagen ${item.id}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-[#000] cursor-pointer font-bold" />
          <CarouselNext className="text-[#000] cursor-pointer font-bold "/>
        </Carousel>
      </section>
    </div>
  );
};
