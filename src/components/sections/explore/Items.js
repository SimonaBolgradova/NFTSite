export const Items = ()=>{
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
                    <input type="text" name="keyword" className="searchText" placeholder="Type Something..." autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-3">
                <fieldset>
                    <select name="Category" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                        <option selected>All Categories</option>
                        <option type="checkbox" name="option1" value="Music">Music</option>
                        <option value="Digital">Digital</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Virtual">Virtual</option>
                    </select>
                </fieldset>
              </div>
              <div className="col-lg-3">
                <fieldset>
                    <select name="Price" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                        <option selected>Available</option>
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
        <div className="col-lg-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="banner">Double Item</span>
              </div>
              <div className="col-lg-6 col-sm-6">
                <span className="author">
                  <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src="assets/images/discover-01.jpg" alt="" style={{borderRadius: '20px'}}/>
                <h4>Mutant Ape Bored</h4>
              </div>
              <div className="col-lg-6 col-sm-6">
                <span className="author">
                  <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src="assets/images/discover-02.jpg" alt="" style={{borderRadius: '20px'}}/>
                <h4>His Other Half</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <span>Current Bid: <br/> <strong>8.16 ETH</strong></span>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <span>Category: <br/> <strong>Digital Art</strong></span>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <span>Collection:: <br/> <strong>2/2</strong></span>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <span>Ends In: <br/> <strong>25th Nov</strong></span>
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
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src="assets/images/discover-03.jpg" alt="" style={{borderRadius: '20px'}}/>
                <h4>Genesis Meta Boom</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br/> <strong>5.15 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br/> <strong>26th Nov</strong></span>
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
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src="assets/images/discover-04.jpg" alt="" style={{borderRadius: '20px'}}/>
                <h4>Another Half Ape</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br/> <strong>3.63 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br/> <strong>24th Nov</strong></span>
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
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src="assets/images/discover-03.jpg" alt="" style={{borderRadius: '20px'}}/>
                <h4>Pixel Sand Box</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br/> <strong>4.68 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br/> <strong>28th Nov</strong></span>
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
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src="assets/images/discover-04.jpg" alt="" style={{borderRadius: '20px'}}/>
                <h4>Another Half Ape</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br/> <strong>2.03 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br/> <strong>25th Nov</strong></span>
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
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src="assets/images/discover-06.jpg" alt="" style={{borderRadius: '20px'}}/>
                <h4>Invisible NFT Land</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br/> <strong>2.03 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br/> <strong>25th Nov</strong></span>
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
        <div className="col-lg-3">
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <span className="author">
                  <img src="assets/images/author.jpg" alt="" style={{maxWidth: '50px', maxHeight: '50px', borderRadius: '50%'}}/>
                </span>
                <img src="assets/images/discover-05.jpg" alt="" style={{borderRadius: '20px'}}/>
                <h4>Another Half Ape</h4>
              </div>
              <div className="col-lg-12">
                <div className="line-dec"></div>
                <div className="row">
                  <div className="col-6">
                    <span>Current Bid: <br/> <strong>2.64 ETH</strong></span>
                  </div>
                  <div className="col-6">
                    <span>Ends In: <br/> <strong>25th Nov</strong></span>
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
      </div>
    </div>
  </div>
    )
}