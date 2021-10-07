import React from 'react';
import { useSelector } from 'react-redux';

import './Header-style.scss';

export default function Header() {
  const page: any = useSelector((store : any) => store?.Page);
  let num1 : any = 1;
  let num2 : any = 2;
  const num3 : any = 2;

  if (page === 2) {
    num1 = '✓';
  } if (page === 3) {
    num1 = '✓';
    num2 = '✓';
  }
  return (
    <div className="header">
      <div className="header-container">

        <p className="number">{num1}</p>
        <p className="number">{num2}</p>
        <p className="number">{num3}</p>
      </div>
    </div>
  );
}
