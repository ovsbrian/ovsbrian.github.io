import { useViewNavigate } from "../Function/Functions";
import { ArrowUpRight } from "lucide-react";
import { Tool } from "./Detalles/Tools";
import { Image, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://uffvkhdprcjqzfybzttd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZnZraGRwcmNqcXpmeWJ6dHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNTQ1NzQsImV4cCI6MjAwNzYzMDU3NH0.AyCqC_O0QEjrP8BCeSv5A_0fDERWXxjl18TdFB0Mm_c"
);

export const Proyects = () => {
  const viewNavigate = useViewNavigate();
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProyectos();
  }, []);

  async function fetchProyectos() {
    const { data, error } = await supabase.from("Projects").select("*");
    if (error) console.log("Error: ", error);
    else setProyectos(data);
    setTimeout(() => setLoading(false), 70);
  }

  if (loading) {
    return (
      <>
        <div className="flex flex-col mb-10 text-white">
          <div className="flex flex-col gap-4 my-2 items-start">
            <Skeleton className="w-36 h-full rounded-sm">
              <div className="flex justify-center items-center gap-1 w-auto cursor-pointer font-semibold ">
                <span className="hover:underline "></span>
                <ArrowUpRight
                  className="hover:opacity-75 "
                  opacity={"90%"}
                  size={20}
                />
              </div>
            </Skeleton>
            <Skeleton className="w-full h-full rounded-sm">
              <div className="w-full cursor-pointer">
                <Image isBlurred className="h-72" classNames="m-5" />
              </div>
            </Skeleton>
            <Skeleton className="w-full h-full rounded-sm">
              <div className="p-1 flex flex-col gap-4">
                <p></p>
                <div className="flex gap-2 text-black max-w-full flex-wrap">
                  a
                </div>
              </div>
            </Skeleton>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {proyectos.map((proyecto) => (
        <>
          <div className="flex flex-col mb-10  text-white">
            <div>
              <div className="flex flex-col gap-4 my-2 items-start">
                <div className="flex justify-center items-center gap-1  w-auto cursor-pointer font-semibold ">
                  <span
                    className="hover:underline "
                    onClick={() => {
                      viewNavigate(`/proyecto/${proyecto.id}`);
                    }}
                  >
                    {proyecto.name}{" "}
                  </span>
                  <ArrowUpRight
                    className="hover:opacity-75 "
                    opacity={"90%"}
                    size={20}
                  />
                </div>
                <div
                  onClick={() => {
                    viewNavigate(`/proyecto/${proyecto.id}`);
                  }}
                  className="w-full cursor-pointer"
                >
                  <Image
                    isBlurred
                    className="w-full"
                    src={proyecto.image_desk}
                    classNames="m-5"
                    disableSkeleton="false"
                  />
                </div>
                <div className="p-1 flex flex-col gap-4">
                  <p>{proyecto.description}</p>
                  <div className="flex gap-2 text-black max-w-full flex-wrap">
                    {proyecto.tech.map((tec, index) => (
                      <span
                        className="px-2 rounded text-white "
                        key={tec + index}
                      >
                        <Tool toolToFind={tec} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
