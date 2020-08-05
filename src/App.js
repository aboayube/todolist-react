import React,{ Component } from 'react';
import TodoItems from './component/todoitem/TodoItems';
import AddItem from './component/additem/AddItem';


class App extends Component {
  state ={
    items:[
      {id:1,name:'wajeeh',age:21},
      {id:2,name:'ayube',age:33}
  
  ],
  }
   deleteItem=(id)=>{
    /*
    طريقة الاولي
    let items=this.state.items;
     let i=items.findIndex(item=>item.id===id);
     items.splice(i,1);
     this.setState({items:items}); */
     let items=this.state.items.filter(item=>{
       return item.id !==id
     })
     this.setState({items:items})
   }
    addItem = (item)=>{
      item.id=Math.random();
let items=this.state.items;
items.push(item);
this.setState({items:items});
    }
  render(){
  return (
    <div className="App container">
<h1 className="text-center">   قائمة المهام</h1>
   <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
   <AddItem addItem={this.addItem}/>
    </div>
  );
}}

export default App;
