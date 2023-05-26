


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


        
     
            
        </div>
    );
};

export default MenuCategorey;