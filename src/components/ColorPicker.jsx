import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
              color={snap.color}
              onChangeComplete={(color) => {
                state.color = color.hex;
              }}
              presetColors={[
                '#000000',
                '#ffffff',
                '#ff00ff',
                '#00ffff',
                '#ffff00',
                '#ff0000',
                '#00ff00',
                '#0000ff',
              ]}
              disableAlpha
            />
    </div>
  )
}

export default ColorPicker