import React, { useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import { ModelContext } from './detection/context/model-context';
import Selector from './detection/utils/Selector';
import LoadingSpinner from './detection/utils/LoadingSpinner';

const MODEL_URL = process.env.PUBLIC_URL + '/detection/';
const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const Detect = () => {
  const [model, setModel] = useState(null);
  const [labels, setLabels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');

  const fetchModel = useCallback((model) => {
      setModel(model);
  }, []);

  const fetchLabels = useCallback((labels) => {
      setLabels(labels);
  }, []);

  const selectMode = useCallback((selected) => {
      setSelected(selected)
  }, [])

  const loadModel = async () => {
    setLoading(true);
    const savedModel = localStorage.getItem('animal_detector');
    const savedLabels = localStorage.getItem('animal_detector_labels');
    if (savedModel && savedLabels) {
      const model = await tf.loadGraphModel('indexeddb://animal_detector'); 
      let labels_json = JSON.parse(savedLabels);
      fetchModel(model);
      fetchLabels(labels_json)
      console.log("saved animal detector found")
    } else {
      // Loading Model for first time
      const model = await tf.loadGraphModel(MODEL_JSON);
      fetchModel(model);
      const response = await fetch(LABELS_URL);
      let labels_json = await response.json();
      fetchLabels(labels_json)
      localStorage.setItem('animal_detector', true);
      model.save('indexeddb://animal_detector')
      localStorage.setItem('animal_detector_labels', JSON.stringify(labels_json));
    }
    setLoading(false);
  }

  return (
      <ModelContext.Provider 
        value={{
          model: model, 
          fetchModel: fetchModel, 
          labels: labels, 
          fetchLabels: fetchLabels,
          selected: selected,
          selectMode: selectMode
        }}>
          <div className="header-div">
            <p className="demo-title">Object Detection</p>
            <p>This currently uses YOLOv8n pretrained coco model</p>
          </div>
          <div>
            {model ? (
              <div>
                <Selector />
              </div>
            ) : (
              <div className="center-div load-div">
                  {loading ? (
                    <div style={{ textAlign: 'center' }}>
                      <LoadingSpinner />
                      <p style={{
                        color: '#950740',
                        fontWeight: '500',
                      }}>Loading Model. Please wait a few seconds...</p>
                    </div>
                  ) : (
                    <button className="css-btn" style={{ width: '60%' }} onClick={loadModel}>
                      <div style={{ fontSize: '16px', fontWeight: '500' }}>Load Model</div>
                      <div style={{ fontSize: '16px', fontWeight: '500' }}>6 MB</div>
                    </button>
                  )}
              </div>
            )}
          </div>
      </ModelContext.Provider>
  );
}

export default Detect;