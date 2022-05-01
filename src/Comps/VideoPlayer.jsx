import React from 'react'
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
     <div>
        <h1>VideoPlayer</h1>

        <ReactPlayer
           width="480px"
           height="240px"
           controls
           url="https://www.youtube.com/watch?v=96VECuUXbEs"
           onReady={() => console.log('onReady callback')}
           onStart={() => console.log('onStart callback')}
           onPause={() => console.log('onPause callback')}
           onEnded={() => console.log('onEnded callback')}
           onError={() => console.log('onError callback')}
        />
     </div>
  );
}

export default VideoPlayer