import React,{useState} from "react";
import "./Input.css";


function Input({st}){

    let {list,display,addListItems,remove,set}=st;
    let [task,setTask]=useState("");
    let [description,setDescription]=useState("")
    return(
        <div className="input-container">
           <h3>TODO LIST</h3>
           <form>
            <div>
                <p>ENTER THE TASK</p>
                <input
                type="text"
                placeholder="ENTER THE TASK"
                value={task}
                onChange={(e)=>{setTask(e.target.value)}}></input>
            </div>
            <div>
                <p>ENTER THE TASK DESCRIPTION</p>
                <input
                type="text"
                placeholder="ENTER THE DESCRIPTION"
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}></input>
            </div>
            <button onClick={(e)=>{e.preventDefault();addListItems(task,description);setTask("");setDescription("")}}>ADD TASK</button>
           </form>
           <div className="list">
             <ul>
             {
           list.map((el,i)=>{
            return(
                <li key={el.key}>
                <p>{el.taskName}</p>
                <p>{el.taskDescription}</p>
                <div> <button onClick={()=>{display((e)=>{return !e});set({name:el.taskName,lis:el.taskDescription,key:el.key})}}>UPDATE</button>
                <button onClick={()=>{remove(el.key)}}>DELETE</button></div>
            </li>
            )
           })
             }
              
             </ul>
           </div>
        </div>
    )
}

export default Input;