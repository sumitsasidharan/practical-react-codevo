import React from 'react'
import CountUp, { useCountUp} from 'react-countup'

const ReactCountup = () => {
   // const { countUp, start, pauseResume, reset, update } = useCountUp({ duration: 5, end: 10000})

  return (
     <div>
        <h1>ReactCountup</h1>

         <div>
            {/* <h2>{countUp}</h2> */}
            {/* <button onClick={start} >Start</button>
            <button onClick={reset} >Reset</button>
            <button onClick={pauseResume} >Pause</button> */}
            {/* <button onClick={() => update(2000)} >Update to 2000</button> */}
         </div>

        <h2>
           <CountUp end={200} />
        </h2>
        <h2>
           <CountUp end={200} duration={2} />
        </h2>
        <h2>
           <CountUp start={500} end={1000} duration={2} suffix="USD" />
        </h2>
        <h2>
           <CountUp end={1000} duration={2} prefix="$" decimals={2} />
        </h2>
     </div>
  );
}

export default ReactCountup