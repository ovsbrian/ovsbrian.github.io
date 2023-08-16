import { Tooltip } from "@nextui-org/react";
import imgUy from "../imgs/uyy.png";
import { FlagIcon } from "./Flag/Flag";

export const TextHome = () => {
  
  return (
    <>
      <div className=" text-white flex items-center gap-2">
        <em>Desarrollador web jr</em> de Uruguay
        <Tooltip showArrow={true} content="Uruguay">
          <span>
            <FlagIcon img={imgUy} />
          </span>
        </Tooltip>
      </div>
    </>
  );
};
