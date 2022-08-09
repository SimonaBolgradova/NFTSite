import { useContext } from 'react';

import { CardContext } from '../../../context/CardContext';
import * as cardService from '../../../services/cardService';

export const Create = ()=>{
  const user = localStorage.getItem('auth');
  const auth = JSON.parse(user || '{}');
  const { cardAdd } = useContext(CardContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const cardData = Object.fromEntries(new FormData(e.target));
      const data = {...cardData,email:auth.email,authorImage: auth.authorImage}
        cardService.create(data)
            .then(result => {
                cardAdd(result)
            });
    };
    return (
        <div className="item-details-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <div className="line-dec"></div>
            <h2>Apply htmlFor <em>Your Item</em> Here.</h2>
          </div>
        </div>
        <div className="col-lg-12">

          <form id="contact" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="title">Item Title</label>
                  <input 
                      type="title" 
                      name="title" 
                      id="title" 
                      placeholder="Ex. Lyon King" autoComplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="description">Description</label>
                  <input 
                  type="description" 
                  name="description" 
                  id="description" 
                  placeholder="Give us your idea" 
                  // autoComplete="on" 
                  // required
                  />
                </fieldset>
              </div>
              
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="price">Price Of Item</label>
                  <input 
                  type="price" 
                  name="price" 
                  id="price" 
                  placeholder="Price depends on quality. Ex. 0.06 ETH" 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="royalities">Royalties</label>
                  <input 
                  type="royalities" 
                  name="royalities" 
                  id="royalities" 
                  placeholder="Common royalties 1-25%" 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label htmlFor="imageUrl">Image URL</label>
                  <input 
                  type="imageUrl" 
                  name="imageUrl" 
                  id="imageUrl" 
                  placeholder=" " 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-8">
                <fieldset>
                  <button type="submit" id="htmlForm-submit" className="orange-button">Submit Your Applying</button>
                </fieldset>
              </div>
            </div>
          </form>

        </div>
        <div className="col-lg-12">
          <div className="section-heading">
            <div className="line-dec"></div>
            <h2>This Is <em>Your Item</em> Preview.</h2>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="left-image">
            <img src="assets/images/create-yours.jpg" alt="" style={{borderRadius: '20px'}}/>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <h4>Dolores Haze Westworld Eye</h4>
          <span className="author">
            <img src="assets/images/author-02.jpg" alt="" style={{maxWidth: '50px', borderRadius: '50%'}}/>
            <h6>Kataleya Smithee<br/><a href="#">@kataleey</a></h6>
          </span>
          <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="row">
            <div className="col-3">
              <span className="bid">
                Current Bid<br/><strong>0.06 ETH</strong><br/><em>($8055,35)</em>
              </span>
            </div>
            <div className="col-4">
              <span className="owner">
                Owner<br/><strong>Alan Smithee</strong><br/><em>(@asmithee)</em>
              </span>
            </div>
            <div className="col-5">
              <span className="ends">
                Ends In<br/><strong>3D 05H 20M 58S</strong><br/><em>(January 22nd, 2021)</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}