import React from 'react';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix"></img>
        </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img src="https://occ-0-4357-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVvidT0UjYcDAHRBn6S67isxBkhqfi9LgbBZt3WzZNUtkCfmDbNwnNijRG0iJKS6S_4H51-5cD1jxpjNZc_BGzOgYvSa.png?r=836);" alt="user"></img>
        </a>
      </div>
    </header>
  );
}