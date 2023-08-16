import { useViewNavigate } from "../Function/Functions";

import { BsArrowLeftShort } from "react-icons/bs";

export default function Header() {
  const viewNavigate = useViewNavigate();

  return (
    <div className="link__container  w-1/3   mb-6 z-10 absolute">
      <div className="flex  relative top-1  z-10  justify-between text-white ">
        <div className=" flex relative items-end hover:opacity-70  ">
       {location.pathname !== '/' &&  <BsArrowLeftShort className="absolute right-16 " size={20}/>  }
          <button 
            onClick={() => {
              viewNavigate("/");
            }}
          >
            ovsbrian
          </button>
        </div>
        <button className="hover:opacity-70"
          onClick={() => {
            viewNavigate("/about");
          }}
        >
          about
        </button>
      </div>
    </div>
  );
}
