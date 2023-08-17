import { Tooltip } from "@nextui-org/react";
import imgUy from "../imgs/uyy.png";
import { FlagIcon } from "./Flag/Flag";
import { RoughNotation } from "react-rough-notation";

export const TextHome = () => {
  
  return (
    <>
      <div className=" text-white flex items-center gap-2">
      <RoughNotation type="underline" show={true}>  <em>Desarrollador web jr</em> de Uruguay </RoughNotation>
        <Tooltip showArrow={true} content="Uruguay">
          <span>
            <FlagIcon img={imgUy} />
          </span>
        </Tooltip>
      </div>
    </>
  );
};
