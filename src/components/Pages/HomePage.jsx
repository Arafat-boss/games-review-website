import React from 'react';
import Navbar from '../RafComponents/Navbar';
import Slider from '../RafComponents/Slider';
import Cards from '../RafComponents/Cards';
import MiniDetailes from '../RafComponents/MiniDetailes';

const HomePage = () => {
    return (
        <div>
            <Slider></Slider>
            <main className='w-11/12 mx-auto'>
                <Cards></Cards>
                <section>
                    <MiniDetailes></MiniDetailes>
                </section>
            </main>

            
        </div>
    );
};

export default HomePage;