import { useState } from "react"

function ColorChange(){
    const [color, setColor]=useState("black")
    const colorSet=["green","purple","blue","red","violet"]

    function handleClick(){
        const randomColor=colorSet[Math.floor(Math.random()*colorSet.length)]
        setColor(randomColor)
    }
    return <button onClick={handleClick} style={{backgroundColor:color}} className="btn btn-secondary">Click Me</button>
}

export default ColorChange