import { useState, useRef, type RefObject, type ReactInstance } from 'react'
import Tools from './assets/components/Tools'
import Canvas from './assets/components/Canvas'
import Actions from './assets/components/Actions'
import './App.css'
import type { ToolTypes } from './Types'
/* import { exportComponentAsPNG } from 'react-component-export-image' */
import * as htmlToImage from 'html-to-image'
/* import { toPng } from 'html-to-image' */


function App() {
  const [width, setWidth] = useState(16)
  const [height, setHeight] = useState(16);
  const [selectedColor, setSelectedColor] = useState('#fff');
  const [tool, setTool] = useState({
    'Brush':true,
    'Eraser': false,
    'Dropper': false,
  });
  const canvasRef = useRef<HTMLDivElement>(null);

  const changeSize = (x:number, y:number) => {
    setWidth(x);
    setHeight(y);
  }

  const changeColor = (color:string) => {
    setSelectedColor(color);
  }

  const changeTool = (newTool:ToolTypes) => {
    /* setTool(newTool); */
    setTool({
      'Brush':newTool.Brush,
      'Eraser': newTool.Eraser,
      'Dropper': newTool.Dropper,
    })
  }

  const exportCanvas = () => {
    /* const newRef = canvasRef as RefObject<ReactInstance>
    exportComponentAsPNG(newRef); */
    htmlToImage.toPng(canvasRef.current!).then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'export.png'
      link.href = dataUrl
      link.click()
    })
  }

  return (
    <main>
      <Tools changeColor={changeColor} selectedColor={selectedColor} tool={tool} changeTool={changeTool}/>
      <div ref={canvasRef}><Canvas width={width} height={height} selectedColor={selectedColor} tool={tool} changeColor={changeColor}/></div>
      <Actions changeSize={changeSize} exportCanvas={exportCanvas}/>
    </main>
  )
}

export default App
