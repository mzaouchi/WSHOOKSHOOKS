import { useEffect, useState } from "react"

const Counter=()=>{
    const [alaya,setAlaya] = useState(0)
    const [strP,setStrP] = useState("")
    const increment=()=> setAlaya(alaya+1)
    // const decrement=()=>  setAlaya(alaya>0 ? alaya-1 : 0)
    const decrement=()=>  alaya>0 && setAlaya(alaya-1)
    // Mount
    // useEffect(()=>{
    //     console.log('Mount')
    // },[])
    //Update
    // useEffect(()=>{
    //     console.log("Update")
    // })

    // useEffect(()=>{
    //     console.log("Update")
    // },[alaya,strP])
    //Unmount
    // useEffect(()=>{
    //     return ()=>{console.log("Unmount")}
    // })
    return(
        <div>
            <h1>Counter Component</h1>
            <button onClick={decrement}>-</button>
            <span>{alaya}</span>
            <button onClick={increment}>+</button>
            <br/>
            <br/>
            <br/>
            <input type="text" onChange={(e)=>setStrP(e.target.value)}/>
            <h2>{strP}</h2>
        </div>
    )
}

export default Counter