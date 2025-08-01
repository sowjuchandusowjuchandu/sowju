import React from 'react'

export default function Head() {

  function changeRed(){
        const ele=document.getElementById("demo");
        ele.style.backgroundColor="red";
    }
    function changeBlue(){
        const ele=document.getElementById("demo");
        ele.style.backgroundColor="blue";
    }
    function changepink(){
        const ele=document.getElementById("demo");
        ele.style.backgroundColor="pink";
    }

  return (
    <div>
        <div  id='demo' style={{width:'100vw' , height:'50vh', backgroundColor:'pink',justifyContent:'center'}}></div>
        <div>
            <button id='red'onClick={changeRed}>red</button>
            <button id='blue'onClick={changeBlue}>blue</button>
            <button id='pink'onClick={changepink}>pink</button>
       </div>
    </div>
  )
}
