import '../css/Row.css'
import Pixel from './Pixel'

type RowProps = {
    width: number,
    selectedColor: string
}

function Row({width, selectedColor}:RowProps){
    let pixels = []

    for(let i = 0; i < width; i++){
        pixels.push(<Pixel selectedColor={selectedColor}/>)
    }
    return(
        <div className='row'>
            {pixels}
        </div>
    )
}

export default Row;