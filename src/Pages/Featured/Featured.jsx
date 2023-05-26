import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white mb-20 mt-20">
            <SectionTitle heading="Cheek it Out" subHeading="Featured Item" >



            </SectionTitle>

            <div className="md:flex bg-slate-500 bg-opacity-40  justify-center items-center py-28 px-36">
                <div>
                    <img src={featuredImg} alt="" />

                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p>Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo maxime molestiae ad nobis consectetur placeat similique totam officiis. Consectetur, ipsum ut perferendis sint nulla ducimus doloremque tenetur molestiae? In et harum quibusdam illum, exercitationem tenetur laudantium enim totam incidunt aliquid eligendi molestiae dolorem mollitia doloribus. Harum itaque dolor aliquid!</p>

                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>

                
            </div>

            
        </div>
    );
};

export default Featured;