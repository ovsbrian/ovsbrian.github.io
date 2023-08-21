

export const Funcionalidad = ({ img,  img2, text_funcionalidad }) => {
  const textoSeparado = text_funcionalidad.split(".");
  const textoFuncinal = textoSeparado.slice(0, -1);
  return (
    <>
      <div>
        <div className="my-4">
          <span className="font-semibold text-2xl">🛠 Funcionalidad</span>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        {textoFuncinal.map((parte, index) => (
          <div key={index} className="my-4 flex flex-col gap-2">
            {parte}.
          </div>
        ))}
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
};
