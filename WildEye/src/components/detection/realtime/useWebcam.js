import { useState, useEffect, useContext } from 'react'
import { ModelContext } from '../context/model-context';

const useWebcam = (model, videoRef) => {
  const [webcamLoaded, setWebcamLoaded] = useState(false);
  const { selected } = useContext(ModelContext);

  useEffect(() => {
    if (model && selected === 'Realtime') {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({
            audio: false,
            video: {
              facingMode: 'environment'
            }
          })
          .then(stream => {
            // window.stream = stream
            videoRef.current.srcObject = stream
            videoRef.current.onloadedmetadata = () => {
              setWebcamLoaded(true)
            }
          })
      }
    }
  }, [model, videoRef, selected])
  return webcamLoaded
}

export default useWebcam
