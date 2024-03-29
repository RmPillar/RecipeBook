import classNames from 'classnames';
import React from 'react';

import SvgIcon from '../../global/SvgIcon';

const RecipeSliderNext = React.forwardRef(({ isHidden }, ref) => (
  <button
    className={classNames(
      'absolute right-0 inset-y-0 z-10 flex flex-col justify-end xl:justify-center',
      {
        'opacity-0 pointer-events-none': isHidden,
      }
    )}
    ref={ref}
    style={{ outline: 'none' }}
  >
    <span className='block w-40 min-w-40 md:w-75 md:min-w-75 text-white xl-max:mb-30'>
      <SvgIcon icon='chevron' width={1} height={1} />
    </span>
  </button>
));

export default RecipeSliderNext;
