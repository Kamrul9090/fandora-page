import Card from "../Card/Card";
import Content from "../Content/Content";
import ContentCard from "../ContentCard/ContentCard";
import Discover from "../Discover/Discover";
import Product from "../Product/Product";
import ServiceCheck from "../ServiceCheck/ServiceCheck";
import Banner from "./Banner/Banner";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchBar></SearchBar>
            <ContentCard></ContentCard>
            <Card></Card>
            <Product></Product>
            <ServiceCheck></ServiceCheck>
            <Content></Content>
            <Discover></Discover>
        </div>
    );
};

export default Home;