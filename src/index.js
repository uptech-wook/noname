import React,{
  useEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/root';
import Test from './routes/Test';

const router =  createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/menu1",
    element: <div>menu 1</div>
  },
  {
    path: "/test",
    element: <Test />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
