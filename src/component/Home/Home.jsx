import Banner from "../Pages/Banner/Banner";
import Designer from "../Pages/Designer/Designer";
import Header from "../Pages/Header/Header";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Work from "../Pages/Work/Work";


const Home = () => {
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <Designer></Designer>
           <Work></Work>
           <Portfolio></Portfolio>
        </div>
    );
};

export default Home;