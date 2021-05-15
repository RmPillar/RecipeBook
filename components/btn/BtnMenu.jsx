import React from 'react';
import classNames from 'classnames';

const BtnMenu = ({ menuActive, setMenuActive, dark }) => {
  const onClick = () => setMenuActive(!menuActive);

  return (
    <button
      className={classNames('btn btn--menu xl:hidden', {
        'is-active': menuActive,
        'text-white': !dark || menuActive,
        'text-gray-900': dark && !menuActive,
      })}
      aria-label='Toggle Menu'
      onClick={onClick}
    >
      <span className='btn--menu__inner'></span>
    </button>
  );
};

export default BtnMenu;
