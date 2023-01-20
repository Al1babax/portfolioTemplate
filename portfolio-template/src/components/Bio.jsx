export function Bio() {

  const socialClasses = "hover:text-stone-400 hover:scale-105 duration-300 ease-in-out flex justify-center items-center px-3 py-1 rounded-md border-0 border-red-50 hover:border-red-300";

  return (
    <div className="Bio bg-red-50 w-full flex h-screen">
      <div className="info bg-red-0 w-[750px] flex flex-col gap-16 justify-center px-10 text-xl">
        <div className="hello bg-sky-0">
          <p className="text-stone-600 text-3xl">Hello. My name is</p>
        </div>
        <div className="name bg-sky-0 text-8xl font-extrabold text-red-400">
          <p>Pertti <br /> Kinnunen</p>
        </div>
        <div className="bullshit bg-sky-0">
          <p className="text-stone-500">A full stack all around designer that may or may not include a guide for specific creative potential methods who framing and evaluating moves.</p>
        </div>
        <div className="socials bg-sky-0 flex justify-center pt-10 text-stone-600 text-md tracking-widest gap-10">
          <a href="" className={`${socialClasses}`}>
            Instagram
          </a>
          <a href="" className={`${socialClasses}`}>
            Facebook
          </a>
          <a href="" className={`${socialClasses}`}>
            Github
          </a>
        </div>
      </div>
      <div className="photo bg-slate-400 w-full">
          <p>Joku kuva</p>
      </div>
    </div>
  );
}