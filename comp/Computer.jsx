import React, {useState} from 'react'
import './Computer.css'

const Computer = () => {

    const [disp, setDisp] = useState("Welcome")

    let stringCooker = "";

    function aBtnHandler()
    {
        stringCooker = stringCooker + 'a'
        console.log(stringCooker)
    }

    function bBtnHandler()
    {
        stringCooker = stringCooker + 'b'
        console.log(stringCooker)

    }

    function cBtnHandler()
    {
        stringCooker = stringCooker + 'c'
        console.log(stringCooker)

    }

    function dBtnHandler()
    {
        stringCooker = stringCooker + 'd'
        console.log(stringCooker)

    }

    function eBtnHandler()
    {
        stringCooker = stringCooker + 'e'
        console.log(stringCooker)

    }

    function fBtnHandler()
    {
        stringCooker = stringCooker + 'f'
        console.log(stringCooker)

    }

    function gBtnHandler()
    {
        stringCooker = stringCooker + 'g'
        console.log(stringCooker)

    }

    function hBtnHandler()
    {
        stringCooker = stringCooker + 'h'
        console.log(stringCooker)

    }

    function iBtnHandler()
    {
        stringCooker = stringCooker + 'i'
        console.log(stringCooker)

    }

    function jBtnHandler()
    {
        stringCooker = stringCooker + 'j'
        console.log(stringCooker)

    }

    function kBtnHandler()
    {
        stringCooker = stringCooker + 'k'
        console.log(stringCooker)

    }

    function lBtnHandler()
    {
        stringCooker = stringCooker + 'l'
        console.log(stringCooker)

    }

    function mBtnHandler()
    {
        stringCooker = stringCooker + 'm'
        console.log(stringCooker)

    }

    function nBtnHandler()
    {
        stringCooker = stringCooker + 'n'
        console.log(stringCooker)

    }

    function oBtnHandler()
    {
        stringCooker = stringCooker + 'o'
        console.log(stringCooker)

    }

    function pBtnHandler()
    {
        stringCooker = stringCooker + 'p'
        console.log(stringCooker)

    }

    function qBtnHandler()
    {
        stringCooker = stringCooker + 'q'
        console.log(stringCooker)

    }

    function rBtnHandler()
    {
        stringCooker = stringCooker + 'r'
        console.log(stringCooker)

    }

    function sBtnHandler()
    {
        stringCooker = stringCooker + 's'
        console.log(stringCooker)

    }

    function tBtnHandler()
    {
        stringCooker = stringCooker + 't'
        console.log(stringCooker)

    }

    function uBtnHandler()
    {
        stringCooker = stringCooker + 'u'
        console.log(stringCooker)

    }

    function vBtnHandler()
    {
        stringCooker = stringCooker + 'v'
        console.log(stringCooker)

    }

    function wBtnHandler()
    {
        stringCooker = stringCooker + 'w'
        console.log(stringCooker)

    }

    function xBtnHandler()
    {
        stringCooker = stringCooker + 'x'
        console.log(stringCooker)

    }

    function yBtnHandler()
    {
        stringCooker = stringCooker + 'y'
        console.log(stringCooker)

    }

    function zBtnHandler()
    {
        stringCooker = stringCooker + 'z'
        console.log(stringCooker)

    }


    function okBtnHandler()
    {
        setDisp(stringCooker);
    }

  return (
    <div id='whole'>
        <div id="monitor">
            {disp}
        </div>

        <div id="keyboard">
            <button onClick={aBtnHandler}>a</button>
            <button onClick={bBtnHandler}>b</button>
            <button onClick={cBtnHandler}>c</button>
            <button onClick={dBtnHandler}>d</button>
            <button onClick={eBtnHandler}>e</button>
            <button onClick={fBtnHandler}>f</button>
            <button onClick={gBtnHandler}>g</button>
            <button onClick={hBtnHandler}>h</button>
            <button onClick={iBtnHandler}>i</button>
            <button onClick={jBtnHandler}>j</button>
            <button onClick={kBtnHandler}>k</button>
            <button onClick={lBtnHandler}>l</button>
            <button onClick={mBtnHandler}>m</button>
            <button onClick={nBtnHandler}>n</button>
            <button onClick={oBtnHandler}>o</button>
            <button onClick={pBtnHandler}>p</button>
            <button onClick={qBtnHandler}>q</button>
            <button onClick={rBtnHandler}>r</button>
            <button onClick={sBtnHandler}>s</button>
            <button onClick={tBtnHandler}>t</button>
            <button onClick={uBtnHandler}>u</button>
            <button onClick={vBtnHandler}>v</button>
            <button onClick={wBtnHandler}>w</button>
            <button onClick={xBtnHandler}>x</button>
            <button onClick={yBtnHandler}>y</button>
            <button onClick={zBtnHandler}>z</button>
            <button onClick={okBtnHandler}>Ok</button>
        </div>


    </div>
  )
}

export default Computer