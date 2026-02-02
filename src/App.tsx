import { useState, useRef } from 'react'
import Tools from './assets/components/Tools'
import Canvas from './assets/components/Canvas'
import Actions from './assets/components/Actions'
import './App.css'
import type { ToolTypes } from './Types'

interface CanvasRef {
    exportImage: () => void
}

function App() {
  const [width, setWidth] = useState(16)
  const [height, setHeight] = useState(16);
  const [selectedColor, setSelectedColor] = useState('#fff');
  const [tool, setTool] = useState({
    'Brush':true,
    'Eraser': false,
    'Dropper': false,
  });
  const canvasRef = useRef<CanvasRef>(null);

  const changeSize = (x:number, y:number) => {
    setWidth(x);
    setHeight(y);
  }

  const changeColor = (color:string) => {
    setSelectedColor(color);
  }

  const changeTool = (newTool:ToolTypes) => {
    setTool({
      'Brush':newTool.Brush,
      'Eraser': newTool.Eraser,
      'Dropper': newTool.Dropper,
    })
  }

  const exportCanvas = () => {
   if(canvasRef.current !== null) canvasRef.current.exportImage();
  }

  return (
    <main>
      <Tools changeColor={changeColor} selectedColor={selectedColor} tool={tool} changeTool={changeTool}/>
      <Canvas ref={canvasRef} width={width} height={height} selectedColor={selectedColor} tool={tool} changeColor={changeColor}/>
      <Actions changeSize={changeSize} exportCanvas={exportCanvas}/>
    </main>
  )
}

export default App
