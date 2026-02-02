import '../css/Canvas.css'
import Row from './Row';
import type { ToolTypes } from '../../Types';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import * as htmlToImage from 'html-to-image'

type CanvasProps = {
    width: number,
    height:number,
    selectedColor: string,
    tool:ToolTypes,
    changeColor:Function
}

interface CanvasRef {
    exportImage: () => void
}

const Canvas = forwardRef<CanvasRef, CanvasProps>(({width, height, selectedColor, tool, changeColor}:CanvasProps, ref) => {
    const canvasRef = useRef(null);
    useImperativeHandle(ref, () => ({
        exportImage(){
        htmlToImage.toPng(canvasRef.current!).then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'export.png'
                link.href = dataUrl
                link.click()
            })
        }
    }));

    let rows = [];
    let board = []

    for(let i = 0; i < height; i++){
        board.push(<Row key={i} row={i+1} width={width} selectedColor={selectedColor} tool={tool} changeColor={changeColor} hasPixels={false}/>);
        rows.push(<Row key={i} row={i+1} width={width} selectedColor={selectedColor} tool={tool} changeColor={changeColor} hasPixels={true}/>);
    }
    return(
        <div id='canvas'>
            <div ref={canvasRef} id='pixels'>
                {rows}
            </div>
            <div id='board'>
                {board}
            </div>
        </div>
    )
})

export default Canvas;