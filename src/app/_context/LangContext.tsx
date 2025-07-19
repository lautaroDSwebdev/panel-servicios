"use client"
import { createContext, useContext, useState } from 'react'
import { dataPage } from '../_mock/dataEntirePage'

interface LanguageContextType {
    data: typeof dataPage["es"];
    HandleLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
export const langCotext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageContextProvider = ({children}: {children: React.ReactNode}) => {

const [lang, setlang] = useState("es")
const [data, setdata] = useState(dataPage["es"])

const HandleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => { 
    if(e.target.value === "es"){
        setlang("es")
        setdata(dataPage.es)
    }else if (e.target.value === "po"){
        setlang("po")
        setdata(dataPage.portugese)
    }else{
        setlang("en")
        setdata(dataPage.en)

    }
 }
  return (
    <langCotext.Provider value={{data, HandleLanguage}}>
        {children}
    </langCotext.Provider>
  )
}