import React, { useRef} from 'react'
// import IdleTimer from 'react-idle-timer'

const ReactIdleTimer = () => {
   const idleTimerRef = useRef(null);

   const onIdle = () => {
      console.log('user is idle...')
   }
  return (
     <div>
        <h1>ReactIdleTimer</h1>
        {/* <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle} ></IdleTimer> */}
     </div>
  );
}

export default ReactIdleTimer

// Application for this library is session timeout, like in banking