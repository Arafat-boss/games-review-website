import mini1 from "../../assets/mini1.jpg"
import mini2 from "../../assets/mini2.jpg"

const MiniDetailes = () => {
  return (
    <div className="space-y-2">
      <div className="hero bg-base-200 rounded-xl mt-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={mini1}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Game With A Gas Mask</h1>
            <p className="py-6">
            Assassin's Creed is an action-adventure game, set in an open-world environment, which is played from a third-person view in which the player primarily assumes the role of Altaïr, as experienced through protagonist Desmond Miles.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
<hr />
      <div className="hero bg-base-200 rounded-xl ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={mini2}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Assassin's Creed game</h1>
            <p className="py-6">
            In this game, you can store gas masks in the stockpile of bases, or in the crate stockpiles of storage depots, seaports, shipping containers, or storage ships. You can transport gas masks by almost any vehicle with inventory slots, but it's more efficient to transport them in bulk as crates.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniDetailes;
