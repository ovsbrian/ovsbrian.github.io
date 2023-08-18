import { Routes, Route } from "react-router-dom";
import Header from "./assets/Compos/Header";
import Home from "./assets/Compos/Home";

import "./App";
import { NavBlur } from "./assets/Compos/NavBlur";
import { Detalles } from "./assets/Compos/Detalles/Detalles";
import { Error404 } from "./assets/Compos/Error/Error";
import { AboutMe } from "./assets/Compos/About/About";
import { Footer } from "./assets/Compos/Footer/Footer";

export default function App() {
  return (
    <>
      <div className=" bg-[#18181A] min-h-screen flex items-center flex-col  ">
        <NavBlur />
        <div className="flex flex-col w-full md:w-1/3  first-line: mt-10  ">
          <Header />
          <div className="pt-20 px-4 min-h-[500px]">
            <Routes>
              {/* Routes */}
              <Route index element={<Home />} />
              <Route path="About" element={<AboutMe />} />
              <Route path="proyecto/:id" element={<Detalles />} />
              {/* 404 page */}
              <Route path="*" element={<Error404 />} />
            </Routes>
          <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}
