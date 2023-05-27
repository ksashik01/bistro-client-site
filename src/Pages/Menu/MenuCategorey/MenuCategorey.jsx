


import { Link } from "react-router-dom";
import Cover from "../../../Shared-Pages/Cover/Cover";
import MenuItems from "../../../Shared-Pages/MenuItems/MenuItems";


const MenuCategorey = ({items,title,img}) => {




    return (
        <div>
{title &&<Cover img={img} title={title} ></Cover>}

        <div className="grid md:grid-cols-2 gap-8 mt-8 mb-16">

      

{
    
    items.map(item => <MenuItems
        key ={item._id}
        item={item}
    >
    
    
    </MenuItems> )

  
}





</div>


       <Link to={`/order/${title}`}>
       
       <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
       </Link> 
     
            
        </div>
    );
};

export default MenuCategorey;