import { CardItem } from "./cards/CardItem";

export const CurrentlyMarket = (cards)=>{
 
    return (
        <div className="currently-market">
 <div className="container">
   <div className="row">
     <div className="col-lg-6">
       <div className="section-heading">
         <div className="line-dec"></div>
         <h2><em>Items</em> Currently In The Market.</h2>
       </div>
     </div>
     <div className="col-lg-6">
       <div className="filters">
         <ul>
           <li data-filter="*"  className="active">All Items</li>
           <li data-filter=".msc">Music Art</li>
           <li data-filter=".dig">Digital Art</li>
           <li data-filter=".blc">Blockchain</li>
           <li data-filter=".vtr">Virtual</li>
         </ul>
       </div>
     </div>
     <div className="col-lg-12">
       <div className="row grid">
        {cards.length>0
        ? cards.map(x=><CardItem key={x._id} card={x}/>)
        : <p>No cards yet</p>
        }        
      </div>
     </div>
   </div>
 </div>
</div>
    )
}