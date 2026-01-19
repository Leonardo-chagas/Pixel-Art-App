import { useState } from 'react'
import '../css/Pixel.css'
import type { ToolTypes } from '../../Types';

type PixelProps = {
    selectedColor: string,
    tool:ToolTypes,
    changeColor: Function
}

function Pixel({selectedColor, tool, changeColor}:PixelProps){
    const [pixelColor, setPixelColor] = useState('#fff');
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    function pixelInteraction() {
        if(tool.Brush){
            setPixelColor(selectedColor);
            setCanChangeColor(false);
        }
        else if(tool.Eraser){

        }
        else if(tool.Dropper){
            console.log(pixelColor);
            changeColor(pixelColor);
        }
    }

    function changeColorOnHover() {
        if(tool.Brush){
            setOldColor(pixelColor);
            setPixelColor(selectedColor);
        }
    }

    function resetColor() {
        if(canChangeColor)
            setPixelColor(oldColor);

        setCanChangeColor(true);
    }

    return(
        <div className='pixel' onClick={pixelInteraction} onMouseEnter={changeColorOnHover} onMouseLeave={resetColor} style={{backgroundColor:pixelColor}}></div>
    )
}

export default Pixel;