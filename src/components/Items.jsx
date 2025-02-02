/* eslint-disable react/prop-types */
import Item from "./Item";

const Items = ({editItem, removeItem,item})=> {
    return (
    <>
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 place-items-center gap-4 mt-12 relative overflow-y-auto max-h-[calc(100vh-100px)] py-4">
       {
        item.map((item)=>{
            return <Item key={item.id} item={item} editItem={editItem} removeItem={removeItem}/>
        })
       }
    </div>
    <p className="my-4">Designed and Developed by <i><u>Dharmendra Pandit</u></i></p>
    </>
    );
}

export default Items;