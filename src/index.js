import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import reportWebVitals from './reportWebVitals';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/grid.css';
import './assets/css/theme.css';
import './assets/css/index.css';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';

document.title = 'Tua CRM111';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Layout />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
