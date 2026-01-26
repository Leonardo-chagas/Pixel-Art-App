import '../css/Actions.css'
import '../css/Container.css'
import { useState } from 'react'

type ActionsProps = {
    'changeSize':Function,
    'exportCanvas': Function
}

function Actions({changeSize, exportCanvas}:ActionsProps){
    const [width, setWidth] = useState(16);
    const [height, setHeight] = useState(16);

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let value = parseInt(e.target.value);
        if(value > 32) value = 32;
        setWidth(value);
    }

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let value = parseInt(e.target.value);
        if(value > 32) value = 32;
        setHeight(value);
    }

    return(
        <div className='menu'>
            <div>
                <div className='inputContainer'>
                    <span>X</span>
                    <input type='number' value={width} onChange={handleWidthChange}></input>
                </div>
                <div className='inputContainer'>
                    <span>Y</span>
                    <input type='number' value={height} onChange={handleHeightChange}></input>
                </div>
                <button onClick={() => changeSize(width, height)}>Resize</button>
            </div>
            <button onClick={() => exportCanvas()}>Export</button>
        </div>
    )
}

export default Actions