import '../css/Actions.css'
import '../css/Container.css'
import { useState } from 'react'

type ActionsProps = {
    'changeSize':Function
}

function Actions({changeSize}:ActionsProps){
    const [width, setWidth] = useState(16);
    const [height, setHeight] = useState(16);

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let value = parseInt(e.target.value);
        setWidth(value);
    }

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let value = parseInt(e.target.value);
        setHeight(value);
    }

    return(
        <div className='menu'>
            <div>
                <div>
                    <span>X</span>
                    <input type='number' value={width} onChange={handleWidthChange}></input>
                </div>
                <div>
                    <span>Y</span>
                    <input type='number' value={height} onChange={handleHeightChange}></input>
                </div>
                <button onClick={() => changeSize(width, height)}>Resize</button>
            </div>
        </div>
    )
}

export default Actions