// import { useEffect, useState } from "react";

import MenuItems from "../../Shared-Pages/MenuItems/MenuItems";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {

//     const [menu , setMenu] = useState([]);
//     useEffect(() =>{
//     fetch('Menu.json')
    
//     .then (res => res.json())
//     .then (data =>{const popularItems = data.filter (item => item.category === 'popular' )

// setMenu(popularItems)

// } )

      
    
// }, [])

const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular')


    return (
       
        <div className="grid md:grid-cols-2 gap-8 mt-8 mb-16">

      

        {
            
            popular.map(item => <MenuItems
                key ={item._id}
                item={item}
            >
            
            
            </MenuItems> )

          
        }





        </div>
    );
};

export default PopularMenu;