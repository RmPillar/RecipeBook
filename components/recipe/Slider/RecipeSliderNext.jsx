import React from 'react';

import SvgIcon from '../../global/SvgIcon';

const RecipeSliderNext = React.forwardRef((props, ref) => (
  <button
    className='absolute right-0 inset-y-0 z-10'
    ref={ref}
    style={{ outline: 'none' }}
  >
    <span className='block w-75 min-w-75 text-white'>
      <SvgIcon icon='chevron' width={1} height={1} />
    </span>
  </button>
));

export default RecipeSliderNext;
