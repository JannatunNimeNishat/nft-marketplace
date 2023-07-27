import Banner from "../Banner/Banner";
import TrendingCollection from "../TrendingCollection/TrendingCollection";
import TopCreators from "../TopCreators/TopCreators";
import BrowseCategory from "../BrowseCategory/BrowseCategory";
import HowItWorks from "../HowItWorks/HowItWorks";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TrendingCollection></TrendingCollection>
           <TopCreators></TopCreators>
           <BrowseCategory></BrowseCategory>
           <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;