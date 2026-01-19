import '../css/Row.css'
import Pixel from './Pixel'
import type { ToolTypes } from '../../Types'

type RowProps = {
    width: number,
    selectedColor: string,
    tool: ToolTypes,
    changeColor: Function
}

function Row({width, selectedColor, tool, changeColor}:RowProps){
    let pixels = []

    for(let i = 0; i < width; i++){
        pixels.push(<Pixel selectedColor={selectedColor} tool={tool} changeColor={changeColor}/>)
    }
    return(
        <div className='row'>
            {pixels}
        </div>
    )
}

export default Row;