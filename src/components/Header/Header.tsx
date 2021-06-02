import React, { FC } from 'react';
import logo from '../../assets/images/logo.png';

const Header: FC = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <header>
        <img
          className="u-pointer-set"
          src={logo}
          alt="logo"
          width="128px"
          onClick={() => alert('hello')}
        />
        <nav></nav>
      </header>
    </>
  );
};

export default Header;
