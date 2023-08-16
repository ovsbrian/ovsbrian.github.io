import { ArrowUpRight } from "lucide-react";
import { AboutMeText } from "./TxtAbout.jsx";

export const AboutMe = () => {
  return (
    <>
      <div className="text-white">
        <div>
          <p>
            <AboutMeText>Hola 👋🏼, soy Brian Vega.</AboutMeText>
            <AboutMeText link={'https://jovenesaprogramar.edu.uy/'}>
              Egresado de Jóvenes a Programar 2022 - Cebial. <ArrowUpRight size={20}/>
            </AboutMeText>
            <AboutMeText>
              Me encanta crear sitios web con interfaces agradables y modernas
              para el usuario.
            </AboutMeText>
            <AboutMeText>
              Si quieres saber más sobre mí o sobre mi trabajo, no dudes en
              contactarme. Estaré encantado de hablar contigo. 🙌🏼
            </AboutMeText>
          </p>
        </div>
      </div>
    </>
  );
};
