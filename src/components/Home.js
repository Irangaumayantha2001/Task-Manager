/** @format */

import { clear } from "@testing-library/user-event/dist/clear";
import React,{ useState } from "react";
import{FiTrash, FiCheckCircle} from "react-icons/fi"


function Home() {

const[task, setTask]= useState([
  
])

const[inputTask,setinputTask]=useState("");

const addNewTask=(title) =>{
 if(title!==""){
    //last id
     const lastId = task.length === 0 ? 0 : task [task.length - 1].id;
     const newTask={id:lastId+1 , title:title , completed: false};
     setTask([...task ,newTask])
     setinputTask("")
 }
}


const removeTask = (id) =>{
    setTask((prevTask) => {
       return prevTask.filter((task) => task.id !== id )
    })
}



  return <div>
    <h1 className=" text-4xl font-extrabold py-5">Task Master</h1>
    <p className=" text-sm font-thin px-16">
    The task master is organize my task it helap you to to do your work perfectlykjchdiu uif ffuif fhiufhihf u fuhruf fuqfihq uirf fuifrui fuiuru
    </p>

{/* add task  */}

<section className=" flex flex-col items-center justify-center my-2">
    <input type="text" placeholder="Add new task" 
    value={inputTask} onChange={(e) => {setinputTask(e.target.value)}} className="border-2 border-purple-300 p-2 m-2 w-60 rounded-md"/>
    <button onClick={()=>addNewTask(inputTask)} className=" bg-yellow-400 p-2  m-2 rounded-md w-60"> Add task + </button>
</section>


<section className=" p-4 border-t-4 m-5">
    {
       task && task.map((task) => {
            return <div key={task.id} className=" flex flex-row items-center justify-center  gap-4">
                <p className={task.completed ? "bg-purple-500 p-2 m-2  rounded-md" : "bg-purple-500 p-2 m-2  rounded-md"} >{task.title}</p>
                <div  onClick={() => removeTask(task.id)}className="p-3 rounded-md text bg-red-500 text-white"><FiTrash/></div>
                <div onClick={() => setTask(task.map((item) =>{
                    if(item.id === task.id){
                        return {...item , completed:true}
                    }
                }))} className="p-3 rounded-md text bg-green-500 text-white"><FiCheckCircle/></div>

            </div>
        })
    }
</section>


  </div>;
}

export default Home;
