import { useState } from 'react'
import '../css/Pixel.css'
import type { ToolTypes } from '../../Types';

type PixelProps = {
    selectedColor: string,
    tool:ToolTypes,
    changeColor: Function
}

function Pixel({selectedColor, tool, changeColor}:PixelProps){
    const [pixelColor, setPixelColor] = useState('');
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    function pixelInteraction() {
        if(tool.Brush){
            setPixelColor(selectedColor);
            setCanChangeColor(false);
        }
        else if(tool.Eraser){
            setPixelColor('');
            setCanChangeColor(false);
        }
        else if(tool.Dropper){
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
        if(canChangeColor && tool.Brush)
            setPixelColor(oldColor);

        setCanChangeColor(true);
    }

    return(
        <div className='pixel' onClick={pixelInteraction} onMouseEnter={changeColorOnHover} onMouseLeave={resetColor} style={{backgroundColor:pixelColor}}></div>
    )
}

export default Pixel;