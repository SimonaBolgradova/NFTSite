import { Fragment } from "react"
import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
import { LoginForm } from "../sections/auth/LoginForm"

export const LoginPage = ()=>{
    return (
        <Fragment>
        <Header/>
        <LoginForm/>
        <Footer/>
        </Fragment>
    )
}