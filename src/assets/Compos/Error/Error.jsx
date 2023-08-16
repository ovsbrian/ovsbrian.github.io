import { Image } from "@nextui-org/react";
import img from "../../imgs/error404.jpg";
export const Error404 = () => {
  return (
    <>
      <div className="text-white pt-20 ">
        <div className="flex flex-col justify-center h-full gap-2">
          <Image radius="sm" alt="NextUI hero Image" src={img} />
          <div className="p-2">
            <span className="text-xl font-semibold ">
              ¡Error! La página que estás buscando no se encuentra en este sitio
              web...
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
