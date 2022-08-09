import { useContext } from "react";
import { CardContext } from "../../../context/CardContext";
import { Carditem } from "./CardItem";


export const Items = ()=>{
  const { cards } = useContext(CardContext);
    return (
        <div className="discover-items">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-heading">
            <div className="line-dec"></div>
            <h2>Discover Some Of Our <em>Items</em>.</h2>
          </div>
        </div>
        <div className="col-lg-7">
          <form id="search-form" name="gs" method="submit" role="search" action="#">
            <div className="row">
              <div className="col-lg-4">
                <fieldset>
                    <input type="text" name="keyword" className="searchText" placeholder="Type Something..." autoComplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-3">
                <fieldset>
                    <select name="Category" className="form-select" aria-label="Default select example" id="chooseCategory" >
                        <option >All Categories</option>
                        <option type="checkbox" name="option1" value="Music">Music</option>
                        <option value="Digital">Digital</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Virtual">Virtual</option>
                    </select>
                </fieldset>
              </div>
              <div className="col-lg-3">
                <fieldset>
                    <select name="Price" className="form-select" aria-label="Default select example" id="chooseCategory" >
                        <option >Available</option>
                        <option value="Ending-Soon">Ending Soon</option>
                        <option value="Coming-Soon">Coming Soon</option>
                        <option value="Closed">Closed</option>
                    </select>
                </fieldset>
              </div>
              <div className="col-lg-2">                        
                <fieldset>
                    <button className="main-button">Search</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        {cards.length>0
        ? cards.map(x=><Carditem key={x._id} card={x}/>)
        : <p>No cards yet</p>
        } 
      </div>
    </div>
  </div>
    )
}