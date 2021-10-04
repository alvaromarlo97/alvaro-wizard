import React, { useState } from 'react';
import './Age-check-style.scss';

export default function AgeCheck() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
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
      <input type="button" value="Next" className="next" disabled={!checked} />

    </div>
  );
}
