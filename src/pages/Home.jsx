
const Home = () => {
  return (
    <div className="md:bg-cover bg-home-tablet flex flex-col px-5 justify-center h-screen bg-black text-white pt-20 items-center bg-no-repeat gap-20">
       <div className="flex px-2 flex-col items-center gap-4">
        <p className="barlow-condensed-regular tracking-widest text-base text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</p>
        <h2 className="bellefair-regular text-[80px]">SPACE</h2>
        <p className="barlow-regular leading-7 text-center px-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="bellefair-regular h-20 w-20 rounded-full text-[20px] tracking-widest bg-white flex justify-center items-center text-black p-20">
        EXPLORE
      </div>

    </div>
  );
};

export default Home;
