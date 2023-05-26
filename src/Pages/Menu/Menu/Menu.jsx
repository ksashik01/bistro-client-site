import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared-Pages/Cover/Cover';
import menuImg from '../../../assets/assets/menu/banner3.jpg'
import dessertImg from '../../../assets/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg'
import PopularMenu from '../../Home/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategorey from '../MenuCategorey/MenuCategorey';


const Menu = () => {
        
const [menu] = useMenu();
const dessert = menu.filter(item => item.category === 'dessert');
const soup = menu.filter(item => item.category === 'soup');
const salad = menu.filter(item => item.category === 'salad');
const pizza = menu.filter(item => item.category === 'pizza');
const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>


<Helmet>

<title>Bistro Boss | Menu</title>

</Helmet>

    <Cover img={menuImg} title="Our Latest Services"></Cover>
    <PopularMenu></PopularMenu>
    <SectionTitle heading="Today offer"></SectionTitle>
    <MenuCategorey items ={offered}></MenuCategorey>
    {/* Desert Iteams */}
    <MenuCategorey items ={dessert} title="Desert"  img={dessertImg}></MenuCategorey>

    <MenuCategorey items={pizza} title="Best Pizza" img={pizzaImg}  ></MenuCategorey>
 
        </div>
    );
};

export default Menu;