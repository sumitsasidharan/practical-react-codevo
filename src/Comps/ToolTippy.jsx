import React, { forwardRef} from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'

const ColoredTooltip = () => {
   return (
      <span style={{ color: 'orange'}}>This is a tooltip Component!!</span>
   )
}

const CustomChild = forwardRef(( props, ref ) => {
   return (
      <div ref={ref}>
         <div>First Line</div>
         <div>Second Line</div>
      </div>
   );
})

const ToolTippy = () => {
  return (
     <div>
        <h2>Tool Tip</h2>

        <div style={{ paddingBottom: '20px' }}>
           <Tippy placement='right' arrow={false} delay={500} content="Basic Tooltip">
              <button>Hover</button>
           </Tippy>
        </div>

        <div style={{ paddingBottom: '20px' }}>
           <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
              <button>Hover</button>
           </Tippy>
        </div>

        <div style={{ paddingTop: '2rem', paddingBottom: '20px' }}>
           <Tippy content={<ColoredTooltip />}>
              <button>Hover</button>
           </Tippy>
        </div>

        <div style={{ paddingTop: '2rem', paddingBottom: '20px' }}>
           <Tippy placement='top-start' content={<ColoredTooltip />}>
              <CustomChild />
           </Tippy>
        </div>
     </div>
  );
}

export default ToolTippy