import React, { useContext } from 'react';
import { ModelContext } from '../context/model-context';
import Detection from '../image/Detection';
import Video from '../video/Video';
import Realtime from '../realtime/Realtime';
import './Selector.css';

const Selector = () => {
    const { selected, selectMode } = useContext(ModelContext);

    return (
        <React.Fragment>
            <div className="top-div">
                <div className="section-div">
                    {selected === 'Image' ? (
                        <div className="selected-div" onClick={() => selectMode('Image')}>
                                <div className="selected-text">Upload Image</div>
                        </div>
                    ) : (
                        <div className="deselected-div" onClick={() => selectMode('Image')}> 
                                <div className="deselected-text">Upload Image</div>
                        </div>
                    )}
                </div>
                
                <div className="section-div">
                    {selected === 'Video' ? (
                            <div className="selected-div" onClick={() => selectMode('Video')}>
                                <div className="selected-text">Upload Video</div>
                            </div>
                        ) : (
                            <div className="deselected-div"onClick={() => selectMode('Video')}> 
                                <div className="deselected-text">Upload Video</div>
                            </div>
                        )}
                </div>

                <div className="section-div">
                    {selected === 'Realtime' ? (
                        <div className="selected-div" onClick={() => selectMode('Realtime')}>
                                <div className="selected-text">Open Camera</div>
                        </div>
                    ) : (
                        <div className="deselected-div" onClick={() => selectMode('Realtime')}>
                            <div className="deselected-text">Open Camera</div>
                        </div>
                    )}
                </div>
            </div>

            {selected === 'Image' && (
                <Detection />
            )}
            {selected === 'Video' && (
                <Video />
            )}
            {selected === 'Realtime' && (
                <Realtime />
            )}

        </React.Fragment>
    )
}
export default Selector;