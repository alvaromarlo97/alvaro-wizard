import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import success from '../../assets/img/success.png';
import { loadPage } from '../../redux/actions/login-creators';
import './Feedback-style.scss';

export default function Feedback() {
  const dispatch = useDispatch();

  return (
    <div className="feedback-container">
      <div className="main-feedback-container">
        <img className="feedback-image" src={success} alt="success" srcSet="" />
        <div className="feedback-text-container">
          <h1 className="main-feedback-text">¡La cuenta se creó correctamente!</h1>
          <p className="feedback-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Provident quia culpa aliquam accusamus?
            Laborum modi cumque itaque! Ex rerum ullam alias similique pariatur non et ipsum,
            itaque inventore, suscipit nulla?

          </p>
        </div>
      </div>
      <div className="navigation-container-feedback">
        <Link to="/login">
          <button
            type="button"
            data-testid="feedback-button-back"
            className="back"
            onClick={() => {
              dispatch(loadPage(2));
            }}
          >
            Atras

          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="feedback-button-init"
            className="next"
            onClick={() => {
              dispatch(loadPage(1));
            }}
          >
            Volver al inicio

          </button>
        </Link>
      </div>
    </div>
  );
}
