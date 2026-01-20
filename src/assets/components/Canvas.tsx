import '../css/Canvas.css'
import Row from './Row';
import type { ToolTypes } from '../../Types';

type CanvasProps = {
    width: number,
    height:number,
    selectedColor: string,
    tool:ToolTypes,
    changeColor:Function
}

function Canvas({width, height, selectedColor, tool, changeColor}:CanvasProps){
    let rows = [];

    for(let i = 0; i < height; i++){
        rows.push(<Row key={i} row={i+1} width={width} selectedColor={selectedColor} tool={tool} changeColor={changeColor}/>);
    }
    return(
        <div id='canvas'>
            <div id='pixels'>
                {rows}
            </div>
        </div>
    )
}

export default Canvas;