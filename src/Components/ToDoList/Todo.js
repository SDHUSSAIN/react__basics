import React,{useState,useEffect} from 'react';
import "./style.css";

// get data from local storage
const getLocalData=()=>{
    const listData = localStorage.getItem("listData");
    if(listData){
        return JSON.parse(listData);
    }else{
        return[];
    }
}

const Todo = () => {

    const [inputData,setInputData] = useState("");
    const [allItems,setAllItems] = useState(getLocalData());
    const [editItems,setEditItems] = useState("")
    const [toggleButton,setToggleButton] = useState(false);

    // to add item to list
    
    const AddItem = () => {
        if(!inputData){
            alert("Please enter the data")
        }if(inputData && toggleButton){
            setAllItems(
                allItems.map((curElem)=>{
                    if(curElem.id === editItems){
                        return {...curElem,name:inputData};
                    }
                    return curElem;
                })
            );
            setInputData("");
            setEditItems(null);
            setToggleButton(false);


           
        }
        else{
            const objData = {
                id:new Date().getTime().toString(),
                name:inputData,
            }
            setAllItems([...allItems,objData]);
            setInputData("");
        }
    };
    // to edit the item

    const editItem=(index)=>{
        const editedData = allItems.find((curElem)=>{
            return curElem.id === index

        })
        setInputData(editedData.name);
        setEditItems(index);
        setToggleButton(true);
    };

    // to delete item from list

    const deleteItem = (index) => {
        const updatedItems = allItems.filter((curElem)=>{
            return curElem.id !== index; 
        })
        setAllItems(updatedItems);
    };

    // remove all items

    const removeAll=()=>{
        setAllItems([]);
    }


    // adding local storage

    useEffect(()=>{
        localStorage.setItem("listData", JSON.stringify(allItems));

    },[allItems]);



    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="./images/todo.svg" alt="todologo" />
                    <figcaption>Add Your List Here✌</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍ Add Items" autofocus className="form-control" value={inputData} onChange={(event)=>{setInputData(event.target.value)}} />
                    {
                       toggleButton ?  <i className="fa fa-edit" onClick={AddItem}></i> : <i className="fa fa-plus" onClick={AddItem}></i>
                    }
                    
                </div>
                <div className="showItems">
                    
                    { allItems.map((curElem)=>{
                        return(
                            <div className="eachItem" key={curElem.id}>
                                <h3>{curElem.name}</h3>
                                <div className="todo-btn">
                                    <i className="fa fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                                    <i className="fa fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                                </div>
                            </div>
                        )
                    })}                    
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>CHECK LIST</span>
                    </button>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default Todo;
