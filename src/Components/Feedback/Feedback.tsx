import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import success from '../../assets/img/success.png';
import { loadPage } from '../../redux/actions/login-creators';

export default function Feedback() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="feedback-container">
        <img src={success} alt="success" srcSet="" />
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
      <div className="navigation-container">
        <Link to="/login">
          <button
            type="button"
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
            className="next"
            onClick={() => {
              dispatch(loadPage(1));
            }}
          >
            Volver al inicio

          </button>
        </Link>
      </div>
    </>
  );
}
