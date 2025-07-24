import React from 'react'
import { Button } from '@/components/ui/button'

export const Form = () => {
  return (
    <div id="formulario" className="min-h-[50vh] lg:min-h-[100vh] w-full p-[4rem_5rem] sm:p-[8rem_5rem] ">
      <section className=" mx-auto flex flex-col items-center">
        <h2 className="text-[#fff] dark:text-[#302b2b] text-[1.4rem] lg:text-[1.6rem] decoration-solid underline font-semibold text-center p-[2rem]">
          Formulario de contacto
        </h2>
        <form className="bg-[#393676] dark:bg-[#e0deff] rounded-3xl p-[2rem] flex flex-col gap-6 w-full max-w-md shadow-lg">
          <input
            type="text"
            placeholder="Nombre"
            className="bg-[#555252] text-[#fff] dark:text-[#4b4949] dark:bg-[#fff] p-3 rounded-[10px] outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="bg-[#555252] text-[#fff] dark:text-[#4b4949] dark:bg-[#fff] p-3 rounded-[10px] outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <input
            type="text"
            placeholder="Mensaje"
            className="bg-[#555252] text-[#fff] dark:text-[#4b4949] dark:bg-[#fff] p-3 rounded-[10px] outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <Button type="submit" className="mt-2">Enviar</Button>
        </form>
      </section>
    </div>
  )
}
