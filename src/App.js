import React , {Component} from 'react';

import TodoItems from './Component/Todoitems/Todoitems';

import AddItem from './Component/Additem/Additem';
import './App.css';

class  App extends Component{
    state ={
        items: [
            
            {id:1 , name:"sahar" , age:23},
             {id:2 , name:"sam" , age:24},
             {id:3 , name:"mona" , age:25},
            
            
        ]
        
        
    }
    
deleteItem = (id) =>{
   let items = this.state.items.filter(item =>{
       return item.id !== id
   })
                                       
   
    this.setState({items});
}

addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState( {items:items} )
    
    
}
    
    render(){
        
        return(
            <div className="App container">
             <h2> Todo list </h2>
            <TodoItems  items={this.state.items} deleteItem={this.deleteItem}  />
            <AddItem  addItem={this.addItem} />
           
            </div>
        
        
        
        
        
        )
        
        
        
        
    }
    
}




export default App;
