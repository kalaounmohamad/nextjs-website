export default function Banner() {
  const navbarHeight = 120;
  const bannerHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center -mx-4 sm:-mx-8"
      style={{
        backgroundImage: `url(/banner.jpg)`,
        height: bannerHeight,
      }}
    >
      <h1 className="text-white text-4xl font-bold mb-4 text-center">
        Tickets Management
      </h1>
      <button className="bg-primary text-white px-6 py-3 rounded-lg">
        Learn More
      </button>
    </div>
  );
}
