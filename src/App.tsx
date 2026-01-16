import { useState } from 'react'
import Tools from './assets/components/Tools'
import Canvas from './assets/components/Canvas'
import Actions from './assets/components/Actions'
import './App.css'

function App() {
  const [width, setWidth] = useState(16)
  const [height, setHeight] = useState(16);
  const [selectedColor, setSelectedColor] = useState('#fff');

  const changeSize = (x:number, y:number) => {
    setWidth(x);
    setHeight(y);
  }

  const changeColor = (color:{hex:string}) => {
    setSelectedColor(color.hex);
  }

  return (
    <main>
      <Tools changeColor={changeColor} selectedColor={selectedColor}/>
      <Canvas width={width} height={height} selectedColor={selectedColor}/>
      <Actions changeSize={changeSize}/>
    </main>
  )
}

export default App
