import React from 'react';
import { useSelector } from 'react-redux';

import './Header-style.scss';

export default function Header() {
  const page: any = useSelector((store : any) => store?.Page);
  let num : any = 2;
  if (page === 1) {
    num = 'x';
  }
  return (
    <div className="header">
      <div className="header-container">

        <p className="number">{num}</p>
        <p className="number">{num}</p>
        <p className="number">3</p>
      </div>
    </div>
  );
}
