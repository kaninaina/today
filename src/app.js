import React,{useState,useEffect} from "react";
import "./app.css";
import Input from "./Input/Input";
import Update from "./Update/Update";
function App(){

   let [display,setDisplay]=useState(true);
   let [list,SetList]=useState([])
let [update,setubdate]=useState({})

useEffect(()=>{
     if(JSON.parse(localStorage.getItem("data"))===null){
       localStorage.setItem("data",JSON.stringify([]))
       }
   let data=JSON.parse(localStorage.getItem("data"));
   console.log("k");
   SetList([...list,...data])
},[])
   function addListItem(task,tastDescription){
      
       let a={
         taskName:task,
         taskDescription:tastDescription,
         key:0
       }
      
      let oldData=JSON.parse(localStorage.getItem("data"));
      a.key=oldData.length+1;
      oldData.push(a);
      console.log(oldData);
      localStorage.setItem("data",JSON.stringify(oldData));
       SetList([...list,a]);
   }

   function removeList(key){
 let filter=list.filter((el)=>{
   return el.key!==key;
 });
 localStorage.setItem("data",JSON.stringify(filter))
 SetList(filter);
   }

  function updatelistitem(key,valu,valut){
   let localData=JSON.parse(localStorage.getItem("data"));
   let h=localData.find((el)=>{
      return el.key===key;
   });
   h.taskName=valu;
   h.taskDescription=valut;
   localStorage.setItem("data",JSON.stringify(localData));
   SetList(localData);
   setDisplay(!display)
  }
  let dta={set:setubdate,remove:removeList,list:list,addListItems:addListItem,display:setDisplay}
   return(
      <div className="app">
        <div className="conatiner">
         {
         
            (display)?
            ((<Input st={dta}/>) )
            :(<Update se={updatelistitem} valu={update}/>)
         }
        </div>
      </div>
   )
}




export default App;