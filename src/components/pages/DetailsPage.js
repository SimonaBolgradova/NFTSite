import { Fragment } from "react"
import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
import { Create } from "../sections/details/Create"
import { Head } from "../sections/Head"
import { Item } from "../sections/details/Item"
import { Scripts } from "../Scripts"
import { Preloader } from "../layouts/Preloader"

export const DetailsPage = ()=>{
    return (
    <Fragment>
        <Header/>
        <Head/>  
        <Item/>
        <Create/>
        <Footer/>
        <Scripts/>
    </Fragment>
    
    )
}