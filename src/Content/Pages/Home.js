import React from 'react'
import BottomBar2 from '../../OSX Files/Components/BottomBar/BottomBar'

import Navbar from '../../Pages/Navbar/Navbar'
import BottomBar from '../Bars/BottomBar/BottomBar'
import Carousel from '../Bars/BottomBar/Carousel'

const Home = () => {
    return (
      <div>
        <Navbar />
        <div style={{fontSize:"5rem" , marginTop:"1.5%"}}>&nbsp;&nbsp;Projects </div>
        <div>
          <Carousel />
        </div>
        <BottomBar />
        <BottomBar2/>
      </div>
    );
}

export default Home
