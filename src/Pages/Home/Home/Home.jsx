import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import Categorey from "../Categorey/Categorey";
import PopularMenu from "../PopularMenu";
import Testimonial from "../Testimoial/Testimonial";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categorey></Categorey>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;