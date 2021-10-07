/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUserData, loadPage } from '../../redux/actions/login-creators';
import './Login-style.scss';

export default function Login() {
  const userName : any = document.getElementById('userName');
  const password : any = document.getElementById('password');
  const clue : any = document.getElementById('message');
  const dispatch = useDispatch();
  const userData: any = useSelector((store : any) => store?.User.Password);
  const [userPassword, setUserPassword] = useState('');
  useEffect(() => {
    setUserPassword(password?.value);
  }, []);
  function toggle(id : string, buttonId:any):void {
    const input : any = document.getElementById(id);
    const button : any = document.getElementById(buttonId);
    if (button.classList.contains('new-password-button')) {
      button.className = 'new-password-button-private';
    } else if (button.classList.contains('new-password-button-private')) {
      button.className = 'new-password-button';
    }
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  const strengthBadge : any = document.getElementById('security-check');

  const strongPassword : any = new RegExp('(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
  const mediumPassword : any = new RegExp(/[A-Z]/);

  function StrengthChecker(PasswordParameter : any) {
    if (strongPassword.test(PasswordParameter)) {
      strengthBadge.style.backgroundColor = 'green';
      strengthBadge.style.width = '204px';
    } else if (mediumPassword.test(PasswordParameter)) {
      strengthBadge.style.backgroundColor = 'orange';
      strengthBadge.style.width = '100px';
    } else {
      strengthBadge.style.backgroundColor = 'red';
      strengthBadge.style.width = '50px';
    }
  }

  password?.addEventListener('input', () => {
    if (userPassword?.length !== 0) {
      strengthBadge.style.display = 'block';
    } else {
      strengthBadge.style.display = 'none';
      password.value = userData;
    }
    dispatch(loginUserData(userName?.value, password?.value, clue?.value));
    strengthBadge.style.display = 'block';
  });

  return (
    <div className="main-container">
      <div className="trial-text-container">
        <h1 className="trial-text">Login for trial</h1>
      </div>
      <div className="user-data">
        <div className="user-name">
          <h3 className="user-name-text">Crea tu Usuario</h3>
          <input type="text" className="user-name-input" placeholder="Introduce tu usuario" id="userName" />
        </div>
        <div className="user-password">
          <div className="new-password">
            <h3 className="new-password-text">Crea tu Contraseña</h3>
            <div className="new-password-container">
              <input
                type="password"
                className="new-password-input"
                id="password"
                maxLength={24}
                onChange={(() => StrengthChecker(userData))}
              />
              <button
                type="button"
                id="eye-button"
                className="new-password-button"
                onClick={() => toggle('password', 'eye-button')}
              />
            </div>
            <div className="password-security" id="security-check" />
          </div>
          <div className="new-password">
            <h3 className="new-password-text">Repite tu Contraseña</h3>
            <div className="new-password-container">
              <input
                type="password"
                className="new-password-input"
                id="passwordR"
              />
              <button
                type="button"
                id="eye-buttonR"
                className="new-password-button"
                onClick={() => {
                  toggle('passwordR', 'eye-buttonR');
                  dispatch(loginUserData(userName?.value, password?.value, clue?.value));
                }}
              />
            </div>

          </div>
        </div>
        <div className="clue">
          <div className="clue-text-container">
            <h3 className="clue-text">Crea tu pista para recordar tu contraseña (opcional)</h3>
            <div className="clue-text-info">
              i
            </div>

          </div>
          <input type="text" maxLength={60} className="clue-input" id="message" placeholder="Max 60 caracteres" />

        </div>
        <div className="navigation-container">
          <Link to="/">
            <button
              type="button"
              className="back"
              onClick={() => {
                dispatch(loadPage(1));
              }}
            >
              Atras

            </button>
          </Link>
          <Link to="/success">
            <button
              type="button"
              className="next"
              onClick={() => {
                dispatch(loadPage(3));
              }}
            >
              Siguiente

            </button>
          </Link>
        </div>
      </div>

    </div>

  );
}
