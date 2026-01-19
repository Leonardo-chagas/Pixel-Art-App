import '../css/Tools.css'
import '../css/Container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faEraser, faEyeDropper } from '@fortawesome/free-solid-svg-icons'
import {SketchPicker, type ColorChangeHandler} from 'react-color'
import type { ToolTypes } from '../../Types'

type ToolsProps = {
    changeColor: Function,
    selectedColor: string,
    tool: ToolTypes
    changeTool: Function
}

function Tools({changeColor, selectedColor, tool, changeTool}:ToolsProps){

    const handleToolChange = (newTool:string) => {
        tool.Brush = false;
        tool.Eraser = false;
        tool.Dropper = false;
        if(newTool == 'brush'){
            tool.Brush = true;
        }
        else if(newTool == 'eraser'){
            tool.Eraser = true;
        }
        else if(newTool == 'dropper'){
            tool.Dropper = true;
        }
        changeTool(tool);
    }

    const handleColorChange = (color:{hex:string}) => {
        console.log(color.hex);
        changeColor(color.hex);
    }

    return(
        <div className='menu'>
            <div>
                <div onClick={()=>handleToolChange('brush')}>
                    <FontAwesomeIcon icon={faPaintBrush}/>
                </div>
                <div onClick={()=>handleToolChange('eraser')}>
                    <FontAwesomeIcon icon={faEraser}/>
                </div>
                <div onClick={()=>handleToolChange('dropper')}>
                    <FontAwesomeIcon icon={faEyeDropper}/>
                </div>
            </div>
            <SketchPicker color={selectedColor} onChangeComplete={handleColorChange}/>
        </div>
    )
}

export default Tools;