import React from 'react';
import './todoitems.css';

const TodoItems=(props)=>{
    const {items , deleteItem}=props;
    let length=items.length;
    const listItems=length?items.map(item=>{
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
            </div>
        )
    }):(
        <p>لا يوجد عناصر لعرضها</p>
    )
    return (

 <div className="ListItems">
     <div>
         <span className="name title">اسم</span>
         <span className="age title">عمر</span>
         <span className="action title">حدث</span>
     </div>
     {listItems}
 </div>
    );
}
export default TodoItems;
