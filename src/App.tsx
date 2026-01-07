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

  const changeColor = (color:string) => {
    setSelectedColor(color);
  }

  return (
    <main>
      <Tools/>
      <Canvas width={width} height={height} selectedColor={selectedColor}/>
      <Actions/>
    </main>
  )
}

export default App
