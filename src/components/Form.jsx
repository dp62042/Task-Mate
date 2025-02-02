/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({addItem}) =>{
    const [itemName, setItemName] = useState('');
   const  handleSubmit =(e)=>{
      e.preventDefault();
      if(!itemName){
        toast.error('Please enter any task!');
      }
      if (!itemName.trim()) return; // Prevent adding empty items
      console.log("Form submitted");
      addItem({itemName});
      setItemName('');
   }
    return(
    <>
       <form onSubmit={handleSubmit} className="top-24 sticky z-50 p-16">
        <p className="text-center font-bold capitalize text-2xl my-2">Task-Mate</p>
        <p className="font-normal text-center mb-4">Your daily task companion</p>
        <div className="flex gap-2 mb-4">
            <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)} placeholder="Enter your task!" className="px-2 border-2 border-sky-500"/>
            <button type="submit" className="bg-sky-500 py-2 px-4 text-white hover:bg-sky-800 rounded-md">Add</button>
        </div>
        <hr className="mb-2" />
       </form>
       
    </>
    );
}

export default Form;