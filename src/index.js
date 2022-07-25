import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './theme'

// import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.variable.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
