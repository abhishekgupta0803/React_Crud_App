import {Employees} from "./data.js";
import { useState,useEffect } from "react";
function App() {

  const [data , setData] = useState([]);
  const [update , setUpdate] = useState(true);

  const [name , setName] = useState('');
  const [age , setAge] = useState('');

  useEffect(()=>{
    setData(Employees);
   },[]);
   
  const toDelete = (id) =>{
    const value = data.filter((i) => i.id !== id );
    setData(value);
  }
  
  const toEdit = (id) =>{
    const val = data.filter((item)=> item.id === id);
     if(val != undefined){
       setName(val[0].name);
       setAge(val[0].age);
     }
    setUpdate(false);

  }

  const toClear = () =>{

    setName("");
    setAge("");
    setUpdate(true);
  }
    
    

  return (
    <div className="App text-center">
      <div className="mt-5">

        <label >Enter Name</label> 
        <input placeholder="Enetr Your Name" onChange={(e) => setName(e.target.value)}  value={name}  />&nbsp;&nbsp;&nbsp;
        <label >Enter Age</label>
        <input placeholder="Enetr Your Name"  onChange={(e) => setName(e.target.value)}  value={age}/>&nbsp;&nbsp;
        {
          !update ? 
           <button className="btn  btn-primary" >Update</button>
          :
          <button  className="btn btn-primary ">Save</button>

        }&nbsp;&nbsp;&nbsp;
        <button className="btn  btn-primary" onClick={()=> toClear()}>Clear</button>
      </div>
      <table  className="table table-success table-striped table-bordered mt-5 ">
        <tr className="table-active" style={{backgroundColor:"gray"}}>
           <th>ID</th>
           <th>Name</th>
           <th>AGE</th>
           <th>Actions</th>
        </tr>
        {data.map((item,index)=>{
          return (
          <tr className="table-active">
            <td key={index}>{item.id}</td>
            <td key={index}>{item.name}</td>
            <td key={index}>{item.age}</td>
            <td>
              <button  className="btn " onClick={()=> toEdit(item.id)}>Edit</button>&nbsp;&nbsp;&nbsp;
              <button className="btn" onClick={()=>toDelete(item.id)}>Delete</button>
             
            </td>
           
          </tr>
          )
        })}
      </table>

    </div>
  );
}

export default App;
