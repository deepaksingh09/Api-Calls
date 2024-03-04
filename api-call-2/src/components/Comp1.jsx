import { useEffect ,useState} from "react";
import "./Comp1.css";
import axios from "axios";
const Comp1=()=>
{
    const[arr,setArr]= useState([])
    // creating make_api_call arrow fun for the async and await
    const make_api_call=async()=>{
        //const res to catch the response
        const res = await axios.get("https://reqres.in/api/users?page=2") 
       //chaning name data to other syntax(oldname : new name)
        const {data:x}=res
        const{data}=x
        setArr(data)
        console.log(data)
    }
    useEffect(()=>{
        make_api_call()
        },[])
    return(
        <>
        <div className="parent">
            {
                // we are doing iteration
                arr.map((element,index)=>{
                    return(<div className="child">
                        <img src={element.avatar} width={200}></img>
                        <h6>ID....{element.id}</h6>
                        <h5>First Name....{element.first_name}</h5>
                        <h5>Last Name....{element.last_name}</h5>
                        <h5>Email....{element.email}</h5>
                    </div>)

                })
            }

        </div>

        </>
    )
}
export default Comp1;
