import { ArrowUpRight } from "lucide-react";
import { AboutMeText } from "./TxtAbout.jsx";

import { RoughNotation } from "react-rough-notation";

export const AboutMe = () => {
  return (
    <>
      <div className="text-whit h-96">
        <div>
          <div>
            <AboutMeText>
              Hola 👋🏼, soy{" "}
              <RoughNotation type="underline" show={true}>
                Brian Vega.
              </RoughNotation>
            </AboutMeText>
            <AboutMeText link={"https://jovenesaprogramar.edu.uy/"}>
              <RoughNotation type="box" show={true}>
                Egresado de Jóvenes a Programar 2022 - Ceibal.
              </RoughNotation>
              <ArrowUpRight size={20} />
            </AboutMeText>

            <AboutMeText >
              <RoughNotation type="highlight" color="#EA3535" show={true}>
                Me encanta crear sitios web con interfaces agradables y modernas
                para el usuario.
              </RoughNotation>
            </AboutMeText>

            <AboutMeText>
              Si quieres saber más sobre mí o sobre mi trabajo, no dudes en
              contactarme. Estaré encantado de hablar contigo. 🙌🏼
            </AboutMeText>
          </div>
        </div>
      </div>
    </>
  );
};
