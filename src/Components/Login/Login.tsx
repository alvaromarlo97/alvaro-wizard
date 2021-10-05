import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUserData } from '../../redux/actions/login-creators';
import './Login-style.scss';

export default function Login() {
  // const data = useSelector((store : any) => store?.Age);
  return (
    <div className="main-container">
      <h1 className="trial-text">Login for trial</h1>
      <div className="user-data">
        <div className="user-name">
          <h3 className="user-name-text">Crea tu Usuario</h3>
          <input type="text" className="user-name-input" />
        </div>
        <div className="user-password">
          <div className="new-password">
            <h3 className="new-password-text">Crea tu Contraseña</h3>
            <div className="new-password-container">
              <input type="text" className="new-password-input" />
              <button type="button" className="new-password-button" />
            </div>
          </div>
          <div className="new-password">
            <h3 className="new-password-text">repite tu Contraseña</h3>
            <div className="new-password-container">
              <input type="text" className="new-password-input" />
              <button type="button" className="new-password-button" />
            </div>

          </div>
        </div>
        <p className="clue-info">
          También puedes crear una pista que te ayude a recordar tu contraseña
        </p>
        <div className="clue">
          <div className="clue-text-container">
            <h3 className="clue-text">Crea tu pista para recordar tu contraseña (opcional)</h3>
            <div className="clue-text-info">
              i
            </div>

          </div>
          <input type="text" maxLength={60} className="clue-input" id="message" />
          <div className="clue-input-counter" id="counter">
            Max60
          </div>

        </div>
      </div>

    </div>

  );
}
