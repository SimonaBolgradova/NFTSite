

export const Carditem =({card})=>{

    return (
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src={card.authorImage} alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src={card.imageUrl} alt="" style={{borderRadius: '20px'}}/>
                <h4>{card.title}</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br/> <strong>{card.price} ETH</strong></span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <a href="details.html">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}