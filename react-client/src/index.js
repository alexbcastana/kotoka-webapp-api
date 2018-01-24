import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from "./App";
import reducers from './reducers/index.js';
import "./styles/index.css";

const store = createStore(reducers);
const target = document.getElementById('root')

const router = (
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
)

render(
   router,
   target
);
