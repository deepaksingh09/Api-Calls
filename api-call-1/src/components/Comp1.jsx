// to connect with server by axios
import axios from "axios";
import { useEffect , useState } from "react";
const Comp1=()=>
{
    //useState ---hook
    const [arr,setArr]=useState([])
    //useEffect hook-- execute after return
    //useEffect(()=>,[])--()=>---> arrow function, []-array dependence
    //axios.get-- to get the data from the server
    //axios.get(),then((posRes)=>{},(errRes)=>{})- to catch the response
    //then((posRes)=>{},(errRes)=>{})-- if the server hit the postive respose than it will store to (posRes)
    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>
        {
            // for the postive result hit we need to print them
            //poRes contain data 
            
            const {data}=posRes
            const {records}=data
            //data contain record
            setArr(records)
            console.log(records)
            //records conatain array of object
            //we will store it using useState--hook

        },(errRes)=>
        {
            // for the negative result
            console.log(errRes)
        }
        )},[])
       


    return(
        <>
        {/*cr eating table for the arr data*/}
        <table 
            border={1} 
            align="center" 
            cellPadding={10} 
            cellSpacing={10}>
            <thead> 
                <tr>
                    <td>Name</td>
                    <td>City</td>
                    <td>Country</td>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((element,index)=>
                    {
                        return(
				<tr key={index}>
                            <td>{element.Name}</td>
                            <td>{element.City}</td>
                            <td>{element.Country}</td>
                        </tr>)
                    })
                }
            </tbody>
                <tfoot></tfoot>
        </table>
        
        </>
    )
}
export default Comp1;