import { ArrowUpRight } from "lucide-react";
export const Deploy = ({ url, web, text }) => {
  return (
    <>
      <div className="my-4">
        <span className="font-semibold text-2xl">🚀 Deploy</span>
      </div>
      <p>
        Utilizo{" "}
        <a
          className="underline hover:opacity-80 cursor-pointer"
          target="_blank"
          rel="noreferrer"
          href={url}
        >
          {web}
          <ArrowUpRight className="inline-flex" size={20} />
        </a>{" "}
        {text}
      </p>
    </>
  );
};
