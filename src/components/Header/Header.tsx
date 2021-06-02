import React, { FC } from 'react';
import logo from '../../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Header: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <header>
        <img
          className="u-pointer-set"
          src={logo}
          alt="logo"
          width="128px"
          onClick={() => dispatch(push('/'))}
        />
        <nav></nav>
      </header>
    </>
  );
};

export default Header;
