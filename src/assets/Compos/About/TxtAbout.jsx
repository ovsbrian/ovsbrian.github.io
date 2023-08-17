export const AboutMeText = ({ children, link, color }) => {
  const textStyle = {
    color: color || 'inherit', // El color será el proporcionado o el color por defecto si no se proporciona uno
  };

  return (
    <div className="text-white mb-4">
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <p className="flex gap-2 items-center hover:underline " style={textStyle}>
              {children}
            </p>
          </a>
        ) : (
          <p style={textStyle}  >{children}</p>
        )}
      </div>
    </div>
  );
};
