import React from 'react'
import Icons from '../BottomIcons/Icons';
import image from '../../Media/bottomBar.jpg'

import "./BottomBar.css"

 const BottomBar2 = () => {
  var sectionStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "repeat-x",
    backgroundImage: `url(${image})`,
    objectFit: "contain",
  };

  return (
    <div >
      <div style={{ width: "50px", height: "50px" }}>
        <Icons />
      </div>

      <div class="bottombar-header" style={sectionStyle}></div>
    </div>
  );
};

export default BottomBar2
