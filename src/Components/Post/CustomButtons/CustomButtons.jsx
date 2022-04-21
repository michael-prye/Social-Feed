import { useState } from "react";
import "./CustomButton.css"

const CustomButtons = (props) => {
    const [thumbUpButton, setThumbUpButton] = useState('inactive')
    const [thumbDownButton, setThumbDownButton] = useState('inactive')

    function thumbUpClick(){
        if(thumbUpButton === 'inactive'){
            setThumbUpButton('thumb-up')
            setThumbDownButton('inactive')
        }
        else{
            setThumbUpButton('inactive')
        }
        
    }
    function thumbDownClick(){
        if(thumbDownButton ==='inactive'){
            setThumbDownButton('thumb-down')
            setThumbUpButton('inactive')
        }
        else{
            setThumbDownButton('inactive')
        }

    }
    return ( 
        <div>
            <button className={thumbUpButton} onClick={thumbUpClick}>THUMBS UP</button>
            <button className={thumbDownButton} onClick={thumbDownClick}>THUMBS DOWN</button>
            </div>
     );
}
 
export default CustomButtons;