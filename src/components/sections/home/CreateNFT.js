import { useContext } from "react"
import { CardContext } from "../../../context/CardContext"

import * as cardService from '../../../services/cardService'

export const CreateNFT = ()=>{

  const {cardAdd} = useContext(CardContext);

  const onSubmit = (e)=>{
    e.preventDefault();

    const cardData = Object.fromEntries(new FormData(e.target));

    cardService.create(cardData)
      .then(result=>{
        cardAdd(result);
      })
  }
    return (
        <div className="create-nft">
 <div className="container">
   <div className="row">
     <div className="col-lg-8">
       <div className="section-heading">
         <div className="line-dec"></div>
         <h2>Create Your NFT & Put It On The Market.</h2>
       </div>
     </div>
     <div className="col-lg-4">
       <div className="main-button">
         <a href="create.html">Create Your NFT Now</a>
       </div>
     </div>
     <div className="col-lg-4">
       <div className="item first-item">
         <div className="number">
           <h6>1</h6>
         </div>
         <div className="icon">
           <img src="assets/images/icon-02.png" alt=""/>
         </div>
         <h4>Set Up Your Wallet</h4>
         <p>NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.</p>
       </div>
     </div>
     <div className="col-lg-4">
       <div className="item second-item">
         <div className="number">
           <h6>2</h6>
         </div>
         <div className="icon">
           <img src="assets/images/icon-04.png" alt=""/>
         </div>
         <h4>Add Your Digital NFT</h4>
         <p>There are 5 different HTML pages included in this NFT <a href="https://templatemo.com/page/1" target="_blank" rel="nofollow">website template</a>. You can edit or modify any section on any page as you required.</p>
       </div>
     </div>
     <div className="col-lg-4">
       <div className="item">
         <div className="icon">
           <img src="assets/images/icon-06.png" alt=""/>
         </div>
         <h4>Sell Your NFT &amp; Make Profit</h4>
         <p>If you would like to support our TemplateMo website, please visit <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">our contact page</a> to make a PayPal contribution. Thank you.</p>
       </div>
     </div>
   </div>
 </div>
</div>

    )
}