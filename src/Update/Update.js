import React,{useState} from "react";
import "./Update.css";
function Update({valu,se}){
    let [task,settask]=useState(valu.name);
    let [des,setdes]=useState(valu.lis)
    return(
        <div className="Update-container">
           <input value={task} onChange={(e)=>{settask(e.target.value)}}></input>
           <input value={des} onChange={(e)=>{setdes(e.target.value)}}></input>
           <button onClick={(e)=>{e.preventDefault();se(valu.key,task,des)}}>add update</button>
        </div>
    )
}


export default Update;