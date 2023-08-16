export const AboutMeText = ({ children, link }) => {
  return (
    <>
      <div className="text-white mb-4 ">
        <div>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer" >
              <p className="flex gap-2 items-center hover:underline">{children}</p>
            </a>
          ) : (
            <p>{children}</p>
          )}
        </div>
      </div>
    </>
  );
};
