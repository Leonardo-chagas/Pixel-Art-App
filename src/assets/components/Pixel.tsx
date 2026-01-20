import { useState } from 'react'
import '../css/Pixel.css'
import type { ToolTypes } from '../../Types';

type PixelProps = {
    originalColor: string,
    selectedColor: string,
    tool:ToolTypes,
    changeColor: Function
}

function Pixel({originalColor, selectedColor, tool, changeColor}:PixelProps){
    const baseColor = originalColor;
    const [pixelColor, setPixelColor] = useState(originalColor);
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    function pixelInteraction() {
        if(tool.Brush){
            setPixelColor(selectedColor);
            setCanChangeColor(false);
        }
        else if(tool.Eraser){
            console.log('erased');
            setPixelColor(baseColor);
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