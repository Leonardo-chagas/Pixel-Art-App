import '../css/Tools.css'
import '../css/Container.css'
import {SketchPicker, type ColorChangeHandler} from 'react-color'

type ToolsProps = {
    changeColor: ColorChangeHandler,
    selectedColor: string
}

function Tools({changeColor, selectedColor}:ToolsProps){
    return(
        <div className='menu'>
            <div>

            </div>
            <SketchPicker color={selectedColor} onChangeComplete={changeColor}/>
        </div>
    )
}

export default Tools;