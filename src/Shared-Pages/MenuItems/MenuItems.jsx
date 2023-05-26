

const MenuItems = ({items}) => {
    const {name, image,price,recipe} = items;
    return (
        <div>
            <img src={image} alt="" />
            <div>
                <h3>{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
            
        </div>
    );
};

export default MenuItems;