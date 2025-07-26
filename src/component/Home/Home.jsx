import Banner from "../Pages/Banner/Banner";
import Blog from "../Pages/Blog/Blog";
import Designer from "../Pages/Designer/Designer";
import Header from "../Pages/Header/Header";
import Portfolio from "../Pages/Portfolio/Portfolio";
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
        </div>
    );
};

export default Home;