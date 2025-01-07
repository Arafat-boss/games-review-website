import { Fade } from "react-awesome-reveal";
import mini1 from "../../assets/mini1.jpg";
import mini2 from "../../assets/mini2.jpg";
import mini3 from "../../assets/mini3.jpg";
import mini4 from "../../assets/mini4.jpg";

const MiniDetailes = () => {
  return (
    <Fade>
      <div className="space-y-2">
        <div className="bg-[#febfd5] text-[#25000d] hover:shadow-red-700 hero rounded-xl mt-10">
          <div className="hero-content flex-col lg:flex-row">
            <img src={mini1} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Game With A Gas Mask</h1>
              <p className="py-6">
                Assassin's Creed is an action-adventure game, set in an
                open-world environment, which is played from a third-person view
                in which the player primarily assumes the role of Altaïr, as
                experienced through protagonist Desmond Miles.
              </p>
              <button className="btn bg-[#fd0259]">Get Started</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="hero bg-[#febfd5] text-[#25000d] rounded-xl ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={mini2} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Assassin's Creed game</h1>
              <p className="py-6">
                In this game, you can store gas masks in the stockpile of bases,
                or in the crate stockpiles of storage depots, seaports, shipping
                containers, or storage ships. You can transport gas masks by
                almost any vehicle with inventory slots, but it's more efficient
                to transport them in bulk as crates.
              </p>
              <button className="btn bg-[#fd0259]">Get Started</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="hero bg-[#febfd5] text-[#25000d] rounded-xl mt-10">
          <div className="hero-content flex-col lg:flex-row">
            <img src={mini3} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Game PUBG MOBILE</h1>
              <p className="py-6">
                Gameplay. PUBG is a player versus player shooter game in which
                up to one hundred players fight in a battle royale, a type of
                large-scale last man standing deathmatch where players fight to
                remain the last alive. Players can choose to enter the match
                solo, duo, or with a small team of up to four people.
              </p>
              <button className="btn bg-[#fd0259]">Get Started</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="hero bg-[#febfd5] text-[#25000d] rounded-xl ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={mini4} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Call of duty</h1>
              <p className="py-6">
                Call of Duty is the world-renowned first-person shooter (FPS)
                franchise that has entertained players for decades. Whether
                you're a newcomer to the world of Call of Duty, or a
                long-serving veteran, there's a diversity of experiences
                available that cater to a variety of tastes and abilities.
              </p>
              <button className="btn bg-[#fd0259]">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MiniDetailes;
