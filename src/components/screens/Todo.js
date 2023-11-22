import React, { useState } from 'react'

export default function Todo() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const [count, SetCount]= useState(1)
    const [newItems,setNewItems]=useState([])
    let renderFunction = () => {
        let newItems=items.sort((a,b)=>{return a.id-b.id;})
        return newItems.map((item) => (
            <li key={item.id}><div className='content' onClick={()=>complete(item)}><div className="round"></div>{item.id + ","}{" "}{item.title}</div><img src={require("../assets/delete.svg").default} alt='img' onClick={() => removeFunction(item.id)} />
            </li>
        ))
    }
    let removeFunction = (id) => {
        let new_item = items.filter((item) => item.id !== id)
        setItems(new_item)
    }
    let completeRemoveFunction = (id) => {
        let new_item = newItems.filter((item) => item.id !== id)
        setNewItems(new_item)
    }
    let updateFunction = () => {
        let item = {
            id: count,
            title: input,
            count:count
        }
        if (input) {
            setItems([...items, item]);
            setInput("");
            SetCount((prev) => prev + 1 )
        }
    }
    let complete=(item)=>{
      let new_item={
        id:item.id,
        title:item.title,
      }
      setNewItems([...newItems,new_item])

      let new_items = items.filter((itemm) => itemm.id !== item.id)
        setItems(new_items)
    }
    let revertFunction=(item)=>{
        let new_item={
            id:item.id,
            title:item.title,
          } 
        setItems([...items,new_item])
        let new_items = newItems.filter((itemm) => itemm.id !== item.id)
        setNewItems(new_items)
    }
    let completedFunction=()=>{
        let newnewItems=newItems.sort((a,b)=>{return a.id-b.id;})
        return newnewItems.map((item, i) => (
            <li key={item.id}><div className='content'><div className="round"><img src={require("../assets/tick-green.svg").default} alt='img' /></div>{item.id + ","}{" "}{item.title}</div><div className='icons'><img src={require("../assets/revert.svg").default} alt='img' onClick={()=>revertFunction(item)} /><img src={require("../assets/delete.svg").default} alt='img' onClick={() => completeRemoveFunction(item.id)} /></div>
            </li>
        ))
    }
    return (
        <div id='home'>
            <div className='wrapper'>
                <h1>Todo List</h1>
                <div className='top'>
                    <h3>Things to be done</h3>
                    <ul>
                        {renderFunction()}
                    </ul>
                    <div className='input-field'>
                        <input placeholder='Type new Task...' value={input} onChange={(e) => setInput(e.target.value)} />
                        <button onClick={updateFunction}>ADD NEW</button>
                    </div>
                </div>
                <div className='bottom'>
                    <h3>Completed</h3>
                    <ul>
                        {completedFunction()}
                    </ul>
                </div>
            </div>
        </div>
    )
}
