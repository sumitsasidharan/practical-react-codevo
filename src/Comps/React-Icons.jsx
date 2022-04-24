import React from 'react';

import { IconContext } from 'react-icons/lib';
import { GrAccessibility } from 'react-icons/gr';
import { BsFillAlarmFill } from 'react-icons/bs';
import { AiFillAlert } from 'react-icons/ai';

const ReactIcons = () => {
   return (
      <div>
         <h1>React-Icons</h1>

         <IconContext.Provider value={{ color: 'orange', size: '5em' }}>
            <GrAccessibility />
            <BsFillAlarmFill />
            <AiFillAlert />
         </IconContext.Provider>
      </div>
   );
};

export default ReactIcons;
