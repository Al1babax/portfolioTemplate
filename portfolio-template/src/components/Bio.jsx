export function Bio() {

  const socialClasses = "w-[100px] h-[50px] hover:bg-blue-400 hover:scale-105 flex justify-center items-center px-2 py-1 rounded-md";

  return (
    <div className="Bio bg-blue-0 w-full flex h-screen">
      <div className="info bg-red-0 w-[750px] flex flex-col gap-16 justify-center px-10 text-xl">
        <div className="hello bg-sky-0">
          <p>Hello. My name is</p>
        </div>
        <div className="name bg-sky-0 text-8xl font-extrabold">
          <p>Pertti <br /> Kinnunen</p>
        </div>
        <div className="bullshit bg-sky-0">
          <p>Ajelen traktorilla ja lypsän lehmiä.</p>
        </div>
        <div className="socials bg-sky-0 flex justify-center pt-10">
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
      <div className="photo bg-yellow-500 w-full">
          <p>Joku kuva</p>
      </div>
    </div>
  );
}