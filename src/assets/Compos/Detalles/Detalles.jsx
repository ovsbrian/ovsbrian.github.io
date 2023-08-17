import { useParams } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";
import { Tool } from "./Tools";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
 
 

const supabase = createClient(
  "https://uffvkhdprcjqzfybzttd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZnZraGRwcmNqcXpmeWJ6dHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNTQ1NzQsImV4cCI6MjAwNzYzMDU3NH0.AyCqC_O0QEjrP8BCeSv5A_0fDERWXxjl18TdFB0Mm_c"
);

export const Detalles = () => {
  const { id } = useParams();
  const [pe, setProject] = useState(" ");

  useEffect(() => {
    fetchProject();
  }, []);

  async function fetchProject() {
    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .eq("id", id);
    if (error) console.log("Error: ", error);
    else setProject(data);
  }
  const p = pe[0];

  return (
    <>
      <div className="flex flex-col gap-4 text-white select-none">
        <div>
          <Image
            disableSkeleton="false"
            isBlurred
            className="w-full"
            src={p.image_desk}
            classNames="m-5"
          />
        </div>
        <div className="mt-5 flex items-end justify-between  ">
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href={p.url}
          >
            <div className="flex items-center gap-1 hover:opacity-75 ">
              <h2 className="font-semibold text-2xl hover:underline">
                {p.name}
              </h2>
              <ArrowUpRight size={20} />
            </div>
          </a>
          <span className="opacity-80 hover:opacity-70"><Tool toolToFind={p.tipe} /></span>
        </div>
        <div className="flex gap-3 flex-wrap ">
          {p.tech.map((tech) => (
            <span key={tech}>
              <Tool toolToFind={tech} />
            </span>
          ))}
        </div>
        <div className="">
          <p>{p.description} ✨</p>
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
              src={p.image_mobile}
            />
            <p>{p.textMobile}</p>
          </div>
        </div>
      </div>
    </>
  );
};
