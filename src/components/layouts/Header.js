import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
// import styles from '../../public/assets/css/templatemo-liberty-market'



export const Header = ()=>{

    const {user} = useContext(AuthContext);
console.log("user: "+user)
    return (
  // <!-- ***** Header Area Start ***** --> */
  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="/" className="logo">
                        <img src="assets/images/logo.png" alt=""/>
                    </a>
                    {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="explore">Explore</a></li>
                        {/* User */}
                        {user 
                        ? <div id ='user'>
                            <li><a href="login">Login</a></li>
                            <li><a  href="register">Register</a></li>
                        </div>
                        :  <div id ="guest">
                        
                        <li><a href="details">Item Details</a></li>
                        <li><a href="author">Author</a></li>
                        <li><a href="create">Create Yours</a></li>
                        <li><a href="logout">Logout</a></li>
                        </div>
                    }                      

                        {/* <li><a href="/">Home</a></li>
                        <li><a href="explore" class="active">Explore</a></li>
                        <li><a href="details">Item Details</a></li>
                        <li><a href="author">Author</a></li>
                        <li><a href="create">Create Yours</a></li> */}
                    </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  //{/* <!-- ***** Header Area End ***** --> */}
    )
}