import '../css/Row.css'
import Pixel from './Pixel'
import type { ToolTypes } from '../../Types'

type RowProps = {
    row: number,
    width: number,
    selectedColor: string,
    tool: ToolTypes,
    changeColor: Function
}

function Row({row, width, selectedColor, tool, changeColor}:RowProps){
    let pixels = []
    const color1 = '#323232';
    const color2 = '#646464';

    for(let i = 0; i < width; i++){
        let originalColor;
        if((row%2 != 0 && (i+1)%2 != 0) || (row%2 == 0 && (i+1)%2 == 0)){
            originalColor = color1;
        }
        else
            originalColor = color2;
        pixels.push(<Pixel originalColor={originalColor} selectedColor={selectedColor} tool={tool} changeColor={changeColor}/>)
    }
    return(
        <div className='row'>
            {pixels}
        </div>
    )
}

export default Row;