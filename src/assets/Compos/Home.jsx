import { Proyects } from "./Proyects";
import { TextHome } from "./Text";
// million-ignore
 
export default function Home() {
  return (
    <>
      <TextHome />
      <h2 className="mt-10 text-white">Mis proyectos:</h2>
      <Proyects />
    </>
  );
}
