import { useParams } from "react-router-dom";
import proyectos from "../../../../public/proyectos.json";
import { ArrowUpRight } from "lucide-react";
import { Tool } from "./Tools";
import { Image } from "@nextui-org/image";

export const Detalles = () => {
  const { id } = useParams();
  const p = proyectos.find((el) => el.id === parseInt(id));

  return (
    <>
      <div className="flex flex-col gap-4 text-white select-none">
        <div>
          <Image
            disableSkeleton="false"
            isBlurred
            className="w-full"
            src={p.imgDeskt}
            classNames="m-5"
          />
        </div>
        <div className="mt-5 flex items-end justify-between  ">
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href={p.linkToPage}
          >
            <div className="flex items-center gap-1 hover:opacity-75 ">
              <h2 className="font-semibold text-2xl hover:underline">
                {p.title}
              </h2>
              <ArrowUpRight size={20} />
            </div>
          </a>
          <span className="opacity-80 hover:opacity-70">{p.tipo}</span>
        </div>
        <div className="flex gap-3 flex-wrap ">
          {p.tech.map((tech) => (
            <span key={tech}>
              <Tool toolToFind={tech} />
            </span>
          ))}
        </div>
        <div className="">
          <p>{p.textDescr} ✨</p>
        </div>
        <div className=" gap-2 mb-4 h-auto">
          <div className="my-4">
            <span className="font-semibold text-2xl">📱 Responsive</span>
          </div>
          <div className="flex gap-2">
            <Image
              disableSkeleton="false"
              isBlurred
              className="w-full h-full "
              src={p.img}
              
            />
            <p>{p.mobileInfo}</p>
          </div>
        </div>
      </div>
    </>
  );
};
