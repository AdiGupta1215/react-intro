import React, {useState} from "react";
import './colorbox.css'

const ColorBox = ()=>{
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const [colorIndex, setColorIndex] = useState(0);
    const color = colors[colorIndex];
  
    const changeColor = () => {
      setColorIndex((colorIndex + 1) % colors.length);
    };
  
    return(
        <div className = 'color-box' style={{backgroundColor: color }} onClick={changeColor} >
        </div>
    );
}

export default ColorBox;
