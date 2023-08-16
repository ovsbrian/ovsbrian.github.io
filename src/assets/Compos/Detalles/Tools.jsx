import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import {  Tooltip } from "@nextui-org/react";
import { FaLinkedinIn } from "react-icons/fa";

const arrayTools = [
  {Linkedin : <FaLinkedinIn/> },
  { React: <FaReact /> },
  { "Node.js": <FaNodeJs /> },
  { Tailwind: <BiLogoTailwindCss /> },
  { GitHub: <FaGithub /> },
  { JavaScript: <BiLogoJavascript /> },
];

export const Tool = ({ toolToFind }) => {
  const foundTool = arrayTools.find((tool) => tool[toolToFind]);
  if (foundTool) {
    return (
      <>
        <Tooltip className="font-semibold" showArrow={true} content={toolToFind} >
          <span className=" text-2xl w-auto  text-white"> {foundTool[toolToFind]}</span>
        </Tooltip>
      </>
    );
  } else {
    return toolToFind;
  }
};
