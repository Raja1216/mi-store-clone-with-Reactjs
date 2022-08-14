
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PreNavbar from './components/preNavbar/PreNavbar';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import  data  from "./data/data.json";
import Offers from './components/offers/Offers';
import Heading from './shard/heading/Heading';
import StarProduct from './components/starProducts/StarProducts';
import HotAccessoriesMenu from './components/hotAccessoriesMenu/HotAccessoriesMenu';
import HotAccessories from './components/hotAccessories/HotAccessories';
import ProductReviews from './components/productReviews/ProductReviews';
import Videos from './components/videos/Videos';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import NavOptions from './components/navOptions/NavOptions';


function App() {
  return (
    <Router className='App-calss'>
    <PreNavbar />
    <Navbar />
    <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
    <Slider start={data.banner.start}/>
    <Offers offer={data.offer}/>
    <Heading text = 'STAR PRODUCTS'/>
    <StarProduct starProduct = {data.starProduct}/>
    <Heading text = 'HOT ACCESSORIES'/>
    <HotAccessoriesMenu />
    <Routes>

    <Route exact path="/music" element={ <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}>
       </Route>

       <Route exact path="/smartDevice" element ={ <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}>
       
        </Route>

        <Route exact path="/home" element ={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}>
       
        </Route>

        <Route exact path="/lifestyle" element = { <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}>
       
        </Route>
        <Route exact path="/mobileAccessories"  element ={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}>
        </Route>
    </Routes>
    <Heading text = 'PRODUCT REVIEWS'/>
    <ProductReviews  productReviews ={data.productReviews}/>
    <Heading text = 'VIDEOS'/>
    <Videos videos={data.videos}/>
    <Heading text = 'IN THE PRESS'/>
    <Banner  banner={data.banner}/>
    <Footer  footer={data.footer}/>


    </Router>


  );
}

export default App;
