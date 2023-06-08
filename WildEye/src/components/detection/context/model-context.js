import { createContext } from 'react';

export const ModelContext = createContext({
    model: null,
    fetchModel: (model) => {},
    labels: null,
    fetchLabels: (labels) => {},
    selected: '',
    selectMode: (selected) => {}
});