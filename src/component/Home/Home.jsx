import Banner from "../Pages/Banner/Banner";
import Blog from "../Pages/Blog/Blog";
import Clients from "../Pages/Clients/Clients";
import Designer from "../Pages/Designer/Designer";
import Development from "../Pages/Development/Development";
import Form from "../Pages/Form/Form";
import Header from "../Pages/Header/Header";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Testimonial from "../Pages/Testimonial/Testimonial";
import Together from "../Pages/Together/Together";
import Work from "../Pages/Work/Work";


const Home = () => {
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <Designer></Designer>
           <Work></Work>
           <Portfolio></Portfolio>
           <Together></Together>
           <Blog></Blog>
           <Development></Development>
           <Clients></Clients>
           <Testimonial></Testimonial>
           <Form></Form>
        </div>
    );
};

export default Home;