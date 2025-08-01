import React, { useState } from 'react'


// let count=0;
function Click() {
    const [count, a] = useState(0)

    function clickHandles() {
        a(count + 1)
        console.log(count)
    }
    function clickHandle() {
        a(0)
        console.log(count)
    }
   

    return (
        <div style={{ margin: "10px 20px" }}>
            <p style={{ color: "red", fontSize: "25px" }}>Click  {count}  number</p>l

            <button style={{ border: "1px solid black", fontSize: "25px" }} onClick={clickHandles}>Click me</button>
            <button style={{ border: "1px solid black", fontSize: "25px", display: "flex" }} onClick={clickHandle}>Click clear</button>


        </div>
    )
}

export default Click