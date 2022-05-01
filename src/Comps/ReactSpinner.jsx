import React, { useState } from 'react';
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners';
import {
   ClipLoader,
   CircleLoader,
   ClimbingBoxLoader,
   ClockLoader,
   DotLoader,
   FadeLoader,
   GridLoader,
   HashLoader,
   MoonLoader,
   PacmanLoader,
   PropagateLoader,
   PuffLoader,
   PulseLoader,
   RingLoader,
   RiseLoader,
   RotateLoader,
   ScaleLoader,
   SyncLoader,
} from 'react-spinners';

const ReactSpinner = () => {
   let [loading, setLoading] = useState(true);
   let [color, setColor] = useState('red');

   return (
      <div>
         <h1>React Spinners Demo</h1>
         <p>BounceLoader</p>
         <BounceLoader loading color="red" size={24} />
         <BarLoader loading color="orange" size={48} />
         <BeatLoader loading color="maroon" size={72} />
         <ClipLoader color={color} loading={loading} size={150} />
         <CircleLoader color={color} loading={loading} size={50} />
         <ClimbingBoxLoader color={color} loading={loading} size={50} />
         <ClockLoader color={color} loading={loading} size={50} />
         <DotLoader color={color} loading={loading} size={50} />
         <FadeLoader color={color} loading={loading} size={50} />
         <GridLoader color={color} loading={loading} size={50} />
         <HashLoader color={color} loading={loading} size={50} />
         <MoonLoader color={color} loading={loading} size={50} />
         <PacmanLoader color={color} loading={loading} size={50} />
         <PropagateLoader color={color} loading={loading} size={50} />
         
         <PuffLoader color={color} loading={loading} size={50} />
         <RingLoader color={color} loading={loading} size={50} />
         <PulseLoader color={color} loading={loading} size={50} />
         <RiseLoader color={color} loading={loading} size={50} />
         <RotateLoader color={color} loading={loading} size={50} />
         <ScaleLoader color={color} loading={loading} size={50} />
         <SyncLoader color={color} loading={loading} size={50} />
      </div>
   );
};

export default ReactSpinner;
