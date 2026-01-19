import { useState } from 'react'
import Tools from './assets/components/Tools'
import Canvas from './assets/components/Canvas'
import Actions from './assets/components/Actions'
import './App.css'
import type { ToolTypes } from './Types'

function App() {
  const [width, setWidth] = useState(16)
  const [height, setHeight] = useState(16);
  const [selectedColor, setSelectedColor] = useState('#fff');
  const [tool, setTool] = useState({
    'Brush':true,
    'Eraser': false,
    'Dropper': false,
  });

  const changeSize = (x:number, y:number) => {
    setWidth(x);
    setHeight(y);
  }

  const changeColor = (color:string) => {
    console.log('changed color');
    setSelectedColor(color);
  }

  const changeTool = (newTool:ToolTypes) => {
    setTool(newTool);
  }

  return (
    <main>
      <Tools changeColor={changeColor} selectedColor={selectedColor} tool={tool} changeTool={changeTool}/>
      <Canvas width={width} height={height} selectedColor={selectedColor} tool={tool} changeColor={changeColor}/>
      <Actions changeSize={changeSize}/>
    </main>
  )
}

export default App
