import { useParams } from "react-router-dom"

export const Item = (cards)=>{

  const {id} = useParams();

  const card = cards.find(x=>x._id == id);

    return (
        <div class="item-details-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h2>View Details <em>For Item</em> Here.</h2>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="left-image">
            <img src="assets/images/item-details-01.jpg" alt="" style={{borderRadius: '20px'}}/>
          </div>
        </div>
        <div class="col-lg-5 align-self-center">
          <h4>Dolores Haze Westworld Eye</h4>
          <span class="author">
            <img src="assets/images/author-02.jpg" alt="" style={{maxWidth: '50px', borderradius: '50%'}}/>
            <h6>Liberty Artist<br/><a href="#">@libertyart</a></h6>
          </span>
          <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="row">
            <div class="col-3">
              <span class="bid">
                Current Bid<br/><strong>6.06 ETH</strong><br/><em>($8,025.50)</em>
              </span>
            </div>
            <div class="col-4">
              <span class="owner">
                Owner<br/><strong>David Walker</strong><br/><em>(@davidwalker)</em>
              </span>
            </div>
            <div class="col-5">
              <span class="ends">
                Ends In<br/><strong>3D 05H 20M 58S</strong><br/><em>(January 22nd, 2021)</em>
              </span>
            </div>
          </div>
          <form action="submit">
            <label for="quantity-text">Place Bid:</label>
            <input placeholder="1 ETH" class="quantity-text"/>
            <button type="submit" id="form-submit" class="main-button">Submit Now</button>
          </form>
        </div>
        <div class="col-lg-12">
          <div class="current-bid">
            <div class="row">
              <div class="col-lg-6">
                <div class="mini-heading"><h4>Current Biddings Prices ( ETH )</h4></div>
              </div>
              <div class="col-lg-6">
                <fieldset>
                  <select name="Category" class="form-select" aria-label="Default select example" id="chooseCategory" >
                      <option >Sort By: Latest</option>
                      <option type="checkbox" name="option1" value="old">Sort By: Oldest</option>
                      <option value="low">Sort By: Lowest</option>
                      <option value="high">Sort By: Highest</option>
                  </select>
              </fieldset>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="item">
                  <div class="left-img">
                    <img src={cards.imageUrl} alt=""/>
                  </div>
                  <div class="right-content">
                    <h4>{cards.author}</h4>
                    <a href="#">{cards.username}</a>
                    <div class="line-dec"></div>
                    <h6>Bid: <em>{cards.price} ETH</em></h6>
                    <span class="date">24/07/2022, 22:00</span>
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