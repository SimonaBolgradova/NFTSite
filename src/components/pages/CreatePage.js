import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
import { Preloader } from "../layouts/Preloader"
import { Scripts } from "../Scripts"
import { Create } from "../sections/create/Create"
import { Head } from "../sections/Head"


export const CreatePage = () => {
    return (
        <>
            <Header />
            <Head />
            <Create />
            <Footer />
            <Scripts />
        </>
    )
}