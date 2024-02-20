export default function Banner() {
  const navbarHeight = `window.innerWidth < 640` ? 104 : 120;
  const bannerHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <div
      className="  bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center  -mx-4 sm:-mx-8"
      style={{
        backgroundImage: `url(/newBanner1.png)`,
        height: bannerHeight,
      }}
    >
      <h1 className="text-white text-4xl font-bold  text-center backdrop-blur-md p-2 rounded-xl">
        Tickets Management
      </h1>
      <button className="bg-white text-primary ">Learn More</button>
    </div>
  );
}
