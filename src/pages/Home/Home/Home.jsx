import Banner from "../Banner/Banner";
import TrendingCollection from "../TrendingCollection/TrendingCollection";
import TopCreators from "./TopCreators/TopCreators";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TrendingCollection></TrendingCollection>
           <TopCreators></TopCreators>
        </div>
    );
};

export default Home;