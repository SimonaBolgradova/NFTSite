export const NFTCard =(props)=>{
    return (
        <div className="col-lg-6 currently-market-item all vrt dig">
        <div className="item">
          <div className="left-image">
            <img src="assets/images/market-01.jpg" alt="" style={{borderRadius: '20px', minWidth: '195px'}}/>
          </div>
          <div className="right-content">
            <h4>Digital Art Item</h4>
            <span className="author">
              <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', borderRadius: '50%'}}/>
              <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
            </span>
            <div className="line-dec"></div>
            <span className="bid">
              Current Bid: <strong>2.50 ETH</strong><em> ($8,400.50)</em>
            </span>
            <span className="ends">
              Ends In: <strong>4D 08H 32M 18S</strong><em> (July 16th, 2022)</em>
            </span>
            <div className="text-button">
              <a href="details.html">View Item Details</a>
            </div>
          </div>
        </div>
      </div>
    )
}