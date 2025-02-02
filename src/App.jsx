import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Items from "./components/Items";
import Form from "./components/Form";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
//import {motion} from "framer-motion";

const App = ()=>{
  
  const [item ,setItem] = useState(()=>{
    const getItem = JSON.parse(localStorage.getItem("item"));
    return getItem ? getItem : [];
});
  useEffect(()=>{
    localStorage.setItem("item", JSON.stringify(item));
  },[item])

  // add item
  const addItem = ({itemName}) =>{
    const newItem = {
      name: itemName,
      id:  nanoid(),
      completed: false,
      date : new Date() ,
    };

    setItem([...item ,newItem]);
    toast.success("Task added successfully" ,{ autoClose: 2000 });
  }

  // remove item
  const removeItem = (id) =>{
     const updatedItem =item.filter((item) => item.id !== id);
     setItem( updatedItem);
     toast.success("Task removed successfully",{ autoClose: 2000 });
  }

  // edit item
  const editItem = (itemId) =>{
    const itemUpdated = item.map((item)=> 
        item.id === itemId ? { ...item, completed: !item.completed } : item
    );

    setItem( itemUpdated );
    toast.success("Task completed successfully",{ autoClose: 2000 });

    
    
  }


  return(
  <>
    <ToastContainer  position="top-center"
  autoClose={2000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover={false}  // Disable pause on hover
  pauseOnFocusLoss={false} // Disable pause on focus loss
  theme="colored"/>
   <div >
  
    <div className="flex flex-col items-center justify-center mt-20 h-screen">
      <Form  addItem={addItem} />
      <Items editItem={editItem} removeItem={removeItem} item={item} />
    </div>
   </div>

  </>
  );
}

export default App;