import { Tool } from "../Detalles/Tools"

 


export const Footer = () => {
    return (
        <>
        <div className="text-white flex gap-4 my-4 ">
            <a href="https://www.linkedin.com/in/ovsbrian/" target="_blank"><Tool toolToFind={'Linkedin'} /></a>
            
            <a href="https://github.com/ovsbrian" target="_blank"><Tool toolToFind={'GitHub'} /></a>
           
           
        </div>
        </>
    )
}