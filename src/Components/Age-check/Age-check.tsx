import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import loadAge, { loadPage } from '../../redux/actions/login-creators';

import './Age-check-style.scss';

export default function AgeCheck() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const dispatch = useDispatch();
  const handleNextPage = () => {
    dispatch(loadAge(checked));
    dispatch(loadPage(2));
  };

  return (
    <div className="container">
      <h1 className="welcome">Welcome to Alvaro´s test</h1>
      <h2 className="main-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        A libero harum quae ea, veniam omnis aperiam doloribus repellendus,
        suscipit quam sed quo veritatis debitis placeat natus unde officia facere voluptate.
      </h2>
      <h3 className="description-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        A libero harum quae ea, veniam omnis aperiam doloribus repellendus,
        suscipit quam sed quo veritatis debitis placeat natus unde officia facere voluptate.
      </h3>
      <div className="check-description">
        <label className="check-container">
          <input onClick={handleClick} type="checkbox" id="check" />
        </label>
        <p>
          Confirma que es mayor de edad, y acepta la tratamiento de
          sus datos según a política de protección de datos vigente.
        </p>
      </div>
      <div className="button-container">
        <Link to="/login">
          <input
            type="button"
            onClick={() => handleNextPage()}
            value="Next"
            className="nextPage"
            disabled={!checked}
          />
        </Link>
      </div>
    </div>
  );
}
