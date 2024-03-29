import { useNavigate } from 'react-router-dom';

import * as authService from "../../../services/authService";
import { withAuth } from "../../../context/AuthContext";

 const RegisterForm = ({auth})=>{

  const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('confirm-password');
        const authorImage = formData.get('authorImage');

        if (password !== repeatPassword) {
            return;
        }else if (formData.get('password')<18){
          return;
        }
        authService.register(email, password,authorImage)
            .then(authData => {
                auth.userLogin(authData);
                navigate('/');
            })
            .catch((err) => {
              console.log(err);
              navigate('/404');
          });
    }
    return (
        <div className="item-details-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <div className="line-dec"></div>
            <h2>Ready to <em>Register</em> Now.</h2>
          </div>
        </div>
        <div className="col-lg-12">
          <form id="contact" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="email">Email</label>
                  <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Ex. simona@abv.bg" 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="password">Password</label>
                  <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Password" 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="repeatPassword">Repead Password</label>
                  <input 
                  type="password" 
                  name="repeatPassword" 
                  id="repeatPassword" 
                  placeholder="Repead Password" 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="address">Address</label>
                  <input 
                  type="address" 
                  name="address" 
                  id="address" 
                  placeholder="Address" 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="age">Age</label>
                  <input 
                  type="age" 
                  name="age" 
                  id="age" 
                  placeholder="Can't be under 18" 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-4">
                <fieldset>
                  <label htmlFor="age">Image</label>
                  <input 
                  type="authorImage" 
                  name="authorImage" 
                  id="authorImage" 
                  placeholder="Author Image" 
                  //autoComplete="on" required
                  />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="htmlForm-submit" className="orange-button">Register</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
}

const RegisterWithAuth = withAuth(RegisterForm);
export default RegisterWithAuth;
