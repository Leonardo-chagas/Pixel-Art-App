import '../css/Canvas.css'
import Row from './Row';

type CanvasProps = {
    width: number,
    height:number,
    selectedColor: string
}

function Canvas({width, height, selectedColor}:CanvasProps){
    let rows = [];

    for(let i = 0; i < height; i++){
        rows.push(<Row key={i} width={width} selectedColor={selectedColor}/>);
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