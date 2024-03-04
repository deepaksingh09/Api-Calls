import axios from "axios";
import { useEffect ,useState } from "react";
const Comp3=()=>
{   

    const  make_api_call=async()=>{
     const res =   await axios.get("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0")
    
     const {dataseries}=res   
     console.log(dataseries)
    }
    useEffect(()=>{
        make_api_call();
    },[]);
    
    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>res </td>
                </tr>
            </thead>
        </table>
     
           
        </>
    )
}
export default Comp3;