import { useState } from 'react';
import orderCover from '../../assets/assets/shop/banner2.jpg'

import Cover from "../../Shared-Pages/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import Order from '../Menu/OrderTab/Order';
import { useParams } from 'react-router-dom';


const OurOrder = () => {

const categories =['salad','pizza', 'soup', 'dessert','drinks'];
const {category} = useParams()

const initialIndex = categories.indexOf(category)


    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
const soup = menu.filter(item => item.category === 'soup');
const salad = menu.filter(item => item.category === 'salad');
const pizza = menu.filter(item => item.category === 'pizza');
const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Cover img={orderCover} title="Order Food"></Cover>
            
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
   
  </TabList>
  <TabPanel>
  <Order items={salad}></Order>
  </TabPanel>
  <TabPanel>
    <Order items={pizza}></Order>
    </TabPanel>
  <TabPanel>
  <Order items={soup}></Order>
  </TabPanel>
  <TabPanel>

  <Order items={dessert}></Order>
  </TabPanel>
  <TabPanel
  
  >
  <Order items={offered}></Order>
  

  </TabPanel>
  <TabPanel></TabPanel>
</Tabs>
          
        </div>
    );
};

export default OurOrder;