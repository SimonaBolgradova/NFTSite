import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
import { Preloader } from "../layouts/Preloader"
import { Scripts } from "../Scripts"
import { Items } from "../sections/explore/Items"
import { TopSellers } from "../sections/explore/TopSellers"


export const ExplorePage =()=>{
    return (
        <>        
            <Header/>            
            <Items/>
            <TopSellers/>
            <Footer/>
            <Scripts/>
        </>
    )
}