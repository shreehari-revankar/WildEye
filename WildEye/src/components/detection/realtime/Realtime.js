import React, { useRef, useContext } from 'react';
import { ModelContext } from '../context/model-context';
import { useDimension } from '../utils/dimension-hook';
import useWebcam from './useWebcam';
import useBoxRenderer from '../video/useBoxRenderer';

const Realtime = () => {
  const { model, labels } = useContext(ModelContext);
  const dimensions = useDimension();
  const videoRef = useRef()
  const canvasRef = useRef()

  const cameraLoaded = useWebcam(model, videoRef)
  useBoxRenderer(model, videoRef, canvasRef, cameraLoaded, labels)

  return (
    <div>
        <div className="center-div">
          <div style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
          }}>
              <div className="image-container">
                  <video
                      autoPlay
                      playsInline
                      muted
                      ref={videoRef}
                      width={dimensions.width}
                      height={dimensions.height} 
                      className="image-canvas"
                  />
                  <canvas 
                      width={dimensions.width}
                      height={dimensions.height} 
                      className="image-canvas" 
                      ref={canvasRef}
                  />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Realtime;