import React, { useState } from 'react'
import { ChromePicker } from 'react-color';

const ColorPicker = () => {
   const [color, setColor] = useState('#fff')
   const [showColorPicker, setShowColorPicker] = useState(false)

  return (
     <div>
        <h1>ColorPicker</h1>
        <button onClick={() => setShowColorPicker((prev) => !prev)}>
           {showColorPicker ? 'Close color picker' : 'Pick a color'}
        </button>

        {showColorPicker && (
           <ChromePicker
              color={color}
              onChange={(updatedColor) => setColor(updatedColor.hex)}
           />
        )}

        <h3>You Picked {color} </h3>
     </div>
  );
}

export default ColorPicker