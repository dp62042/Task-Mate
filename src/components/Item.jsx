/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
const Item = ({item, removeItem ,editItem})=> {
    const [isDelete, setIsDelete] = useState(false);

    const handleDelete = () =>{
        setIsDelete(true);
        setTimeout(() => removeItem(item.id), 800);
    }
    return (
    <>
    <motion.div  initial={{ opacity: 1, y: 0 }}
      animate={isDelete ? { y: "100vh", opacity: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col gap-4 h-[160px] w-[320px] shadow-md px-4 mt-2 overflow-y-auto py-4 mx-4">
        <div className="flex flex-col">
        <input type="checkbox" checked={item.completed} onChange={()=> editItem(item.id)} className="flex ml-auto size-6 mr-2"  />
         <div className="text-wrap p-2">
         <p className={`${item.completed?"line-through":""}` }>{item.name}</p></div>
        </div>
        <div className="flex gap-2">
         <p className="mt-2">{new Date(item.date).toLocaleDateString("en-GB",  { 
  day: "2-digit", month: "2-digit", year: "numeric",
  hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true 
})}</p>
         <button
        onClick={handleDelete}
        className=" px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex ml-auto"
      >
        Delete
      </button>
        </div>
    </motion.div>
    
    </>
    );
}

export default Item;