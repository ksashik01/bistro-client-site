import { useEffect, useState } from "react";

import MenuItems from "../../Shared-Pages/MenuItems/MenuItems";


const PopularMenu = () => {

    const [menu , setMenu] = useState([]);
    useEffect(() =>
    fetch('Menu.json')
    
    .then (res => res.json())
    .then (data => {

        const popularItems = data.filter(item => item.category === 'popular')

        setMenu(popularItems)
    })
    
    , [])






    return (
       
        <div>

      

        {
            
            menu.map(item => <MenuItems
                key ={item._id}
                items={item}
            >
            
            
            </MenuItems> )

          
        }





        </div>
    );
};

export default PopularMenu;