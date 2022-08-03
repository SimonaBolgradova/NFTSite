export const HeadExplore = ()=>{
    return (
        <div className="page-heading">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h6>Liberty NFT Market</h6>
          <h2>Discover Some Top Items</h2>
          <span>Home  <a href="/explore">Explore</a></span>
        </div>
      </div>
    </div>
    <div className="featured-explore">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-features owl-carousel">
              <div className="item">
                <div className="thumb">
                  <img src="assets/images/featured-01.jpg" alt="" style={{borderRadius:' 20px'}}/>
                  <div className="hover-effect">
                    <div className="content">
                      <h4>Triple Mutant Ape Bored</h4>
                      <span className="author">
                        <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                        <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src="assets/images/featured-02.jpg" alt="" style={{borderRadius:' 20px'}}/>
                  <div className="hover-effect">
                    <div className="content">
                      <h4>Bored Ape Kennel Club</h4>
                      <span className="author">
                        <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                        <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src="assets/images/featured-03.jpg" alt="" style={{borderRadius:' 20px'}}/>
                  <div className="hover-effect">
                    <div className="content">
                      <h4>Genesis Club by KMT</h4>
                      <span className="author">
                        <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                        <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src="assets/images/featured-04.jpg" alt="" style={{borderRadius:' 20px'}}/>
                  <div className="hover-effect">
                    <div className="content">
                      <h4>Crypto Aurora Guy</h4>
                      <span className="author">
                        <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                        <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}