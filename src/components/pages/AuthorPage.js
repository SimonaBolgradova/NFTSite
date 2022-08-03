import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
import { Preloader } from "../layouts/Preloader"
import { Scripts } from "../Scripts"
import { Author } from "../sections/author/Author"
import { Head } from "../sections/Head"

export const AuthorPage =()=>{
    return (
        <>
        <Header/>
        <Head/>
        <Author/>
        <Footer/>
        <Scripts/>
        </>
    )
}