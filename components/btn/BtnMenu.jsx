import React from 'react';
import classNames from 'classnames';

const BtnMenu = ({ menuActive, setMenuActive }) => {
  const onClick = () => setMenuActive(!menuActive);

  return (
    <button
      className={classNames('btn btn--menu lg:hidden', {
        'is-active': menuActive,
      })}
      aria-label='Toggle Menu'
      onClick={onClick}
    >
      <span className='btn--menu__inner'></span>
    </button>
  );
};

export default BtnMenu;
