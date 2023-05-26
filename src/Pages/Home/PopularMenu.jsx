import { useEffect, useState } from "react";

import MenuItems from "../../Shared-Pages/MenuItems/MenuItems";


const PopularMenu = () => {

    const [menu , setMenu] = useState([]);
    useEffect(() =>{
    fetch('Menu.json')
    
    .then (res => res.json())
    .then (data =>{const popularItems = data.filter (item => item.category === 'popular' )

setMenu(popularItems)

} )

      
    
}, [])


    return (
       
        <div className="grid md:grid-cols-2 gap-8 mt-8 mb-16">

      

        {
            
            menu.map(item => <MenuItems
                key ={item._id}
                item={item}
            >
            
            
            </MenuItems> )

          
        }





        </div>
    );
};

export default PopularMenu;