import React, { FC } from 'react';
import logo from '../../assets/images/f-hww-logo.png';

const Footer: FC = () => {
  return (
    <>
      <footer className="l-footer">
        <img
          className="u-pointer-set"
          src={logo}
          alt="logo"
          width="128px"
          onClick={() => alert('hello')}
        />
      </footer>
    </>
  );
};

export default Footer;
