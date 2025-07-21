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
    { id: 1, img: "/huy-phan-84Pe9HdcWtE-unsplash.jpg" },
    { id: 2, img: "/jakob-owens-qnwN8gMaofs-unsplash.jpg" },
    { id: 3, img: "/max-bohme-6aE9Zrfl8oE-unsplash.jpg" },
    { id: 4, img: "/micah-sammie-chaffin-Vs3OXyzKUkg-unsplash.jpg" },
    { id: 5, img: "/rosario-janza-LHI32I1iodw-unsplash.jpg" },
    { id: 6, img: "/micah-sammie-chaffin-Vs3OXyzKUkg-unsplash.jpg" },
    { id: 7, img: "/rosario-janza-LHI32I1iodw-unsplash.jpg" },
    { id: 8, img: "/micah-sammie-chaffin-Vs3OXyzKUkg-unsplash.jpg" },
    { id: 9, img: "/rosario-janza-LHI32I1iodw-unsplash.jpg" },
  ];

  return (
    <div id="carrusel" className="min-h-[100vh]  w-full p-[5rem]">
      <section className="max-width mx-auto">
        <h2 className="text-[#fff] dark:text-[#302b2b] text-[1.2rem] text-center p-[2rem] font-semibold ">{titulo_car}</h2>
        <Carousel className="">
          <CarouselContent>
            {images.map((item) => (
              <CarouselItem className="" key={item.id}>
                <img
                  src={item.img}
                  alt={`Imagen ${item.id}`}
                  style={{ width: "600px", height: "auto" }}
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
