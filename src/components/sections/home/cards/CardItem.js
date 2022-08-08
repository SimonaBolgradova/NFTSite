import { Link } from "react-router-dom"


export const CardItem = ({card})=>{
    return (
        <div className="col-lg-6 currently-market-item all msc">
           <div className="item">
             <div className="left-image">
               <img src={card.imageUrl} alt="" style={{borderRadius: '20px', minWidth: '195px'}}/>
             </div>
             <div className="right-content">
               <h4>{card.title}</h4>
               <span className="author">
                 <img src={card.authorImage} alt="" style={{maxWidth: '50px', borderRadius: '50%'}}/>
                 <h6>{card.author}<br/><a href="#">{card.username}</a></h6>
               </span>
               <div className="line-dec"></div>
               <span className="bid">
                 Current Bid <strong>{card.price} ETH</strong><em>($8,240.50)</em>
               </span>
               <span className="ends">
                 Ends In <strong>4D 08H 15M 42S</strong><em>(July 24th, 2022)</em>
               </span>
               <div className="text-button">
                 <Link to={`explore/${card._id}`}>View Item Details</Link>
               </div>
             </div>
           </div>
         </div>
    )
}