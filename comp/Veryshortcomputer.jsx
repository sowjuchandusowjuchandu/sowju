import React, {useState} from 'react'
import './Computer.css'

const VeryShortComputer = () => {


    const [disp, setDisp] = useState("Welcome to short")
    let stringCooker = "";


    let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Ok', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    function btnHandler(ganga) {
        console.log(ganga.target.innerText)

        if (ganga.target.innerText == 'Ok') {
            setDisp(stringCooker)
        }
        else {
            stringCooker = stringCooker + ganga.target.innerText;
        }


    }
    return (
        <div id='whole'>
            <div id="monitor">
                {disp}
            </div>

            <div id="keyboard">

                {
                    chars.map(e => {
                        return <button onClick={btnHandler}>{e}</button>
                    })
                }
               
            </div>


        </div>
    )
}



export default VeryShortComputer