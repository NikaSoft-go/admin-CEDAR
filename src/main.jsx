import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store';
import {persistStore} from "redux-persist";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react";
import App from './App.jsx'
import './index.css'
import {ToastContainer} from "react-toastify";

let persist = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persist}>
              <Router>
                  <ToastContainer
                      hideProgressBar={true}
                      autoClose={5000}
                  />
                  <App />
              </Router>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
)
