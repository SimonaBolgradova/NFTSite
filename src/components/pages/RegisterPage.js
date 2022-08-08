import { lazy } from "react";

import { Fragment } from "react"
import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
//import {RegisterForm } from "../sections/auth/RegisterForm"

const RegisterForm = lazy(() => import('../sections/auth/RegisterForm'));
export const RegisterPage = ()=>{
    return (
        <>
        <Fragment>
        <Header/>
        <RegisterForm/>
        <Footer/>
        </Fragment>
        </>        
    )
}