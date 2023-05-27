import FoodCard from "../../../components/FoodCard/FoodCard";


const Order = ({items}) => {
    return (
        <div className='grid md:grid-cols-3'>
        {
             items.map (item => <FoodCard
                 key={item._id}
                 item={item}
             >
     
             </FoodCard>)
         }
     
     
        </div>
    );
};

export default Order;