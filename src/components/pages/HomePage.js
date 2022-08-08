import { Scripts } from "../Scripts";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import { Collections } from "../sections/home/Collections";
import { CreateNFT } from "../sections/home/CreateNFT";
import { CurrentlyMarket } from "../sections/home/CurrentlyMarket";
import { MainBanner } from "../sections/home/MainBanner";
import { Preloader } from "../layouts/Preloader";


export const HomePage = ()=> {
    return (
      <>
        <Header/>
        <MainBanner/>
        {/* <Collections/> */}
        <CreateNFT/>
        {/* <CurrentlyMarket/> */}
        <Footer/>
        <Scripts/>        
      </>
    );
  }