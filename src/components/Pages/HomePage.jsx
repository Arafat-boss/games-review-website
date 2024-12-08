import React from "react";
import Navbar from "../RafComponents/Navbar";
import Slider from "../RafComponents/Slider";
import Cards from "../RafComponents/Cards";
import MiniDetailes from "../RafComponents/MiniDetailes";
import About from "../RafComponents/About";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
    </Helmet>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <About></About>
      </section>
      <main className="w-11/12 mx-auto">
        <Cards></Cards>
        <section >
          <MiniDetailes></MiniDetailes>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
