import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'

import { AuthContext } from '../../../context/AuthContext';
import * as authService from '../../../services/authService';

export const LoginForm = () => {
  const {userLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const {
      username,
      password
    } = Object.fromEntries(new FormData(e.target));

    authService.login(username, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
  }
  return (
    <div className="item-details-page">
      <div className="container">
        <div className="row1">
          <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h2>Ready to <em>Explore</em> Now.</h2>
            </div>
          </div>
          <div className="login">
            <form id="contact" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-lg-4">
                  <fieldset>
                    <label htmlFor="username">Username</label>
                    <input type="username" name="username" id="username" placeholder="@username" autoComplete="on" required />
                  </fieldset>
                </div>
                <div className="col-lg-4">
                  <fieldset>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="on" required />
                  </fieldset>
                </div>

                <div className="col-lg-8">
                  <fieldset>
                    <button type="submit" id="htmlForm-submit" className="orange-button">Login</button>
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