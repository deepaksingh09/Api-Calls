import axios from "axios";
import { useRef,useState } from "react";

const Comp2=()=>{
const ref1 = useRef(null);
const [arr,setArr]= useState([])
const make_api_call= async()=>{
    const res =   await axios.get(`https://reqres.in/api/users?page=${ref1.current.value}`)
    const {data:x} = res;
    const {data} = x;
    setArr(data)
}

    
    const get_data=()=>
    {
        make_api_call();
    }
    return(
    <>
        <input type="number" ref={ref1} placeholder="enter number"></input>
        <button onClick={get_data}>Submit</button>
        <br></br>
        <p>{JSON.stringify(arr)}</p>
    </>
    )
}
export default Comp2;