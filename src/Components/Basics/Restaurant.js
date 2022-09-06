import React,{useState} from 'react';
import './Restaurant.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar';

const uniqueList = [...new Set (Menu.map((curElem)=>{
    return curElem.category 
})),"All"];


const Restaurant = () => {
    const [menuData, setmenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category=== "All"){
            setmenuData(Menu)
            return;
        }


        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category
        });

        setmenuData(updatedList);

    }

    return (
        <> 
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData} /> 
        </>
        
    );
};

export default Restaurant;