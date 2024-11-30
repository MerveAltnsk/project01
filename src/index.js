import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import ClassComponentsTutorial from './components/ClassComponentsTutorial';
//import FunctionComponentsTutorial from './components/FunctionComponentsTutorial';
import reportWebVitals from './reportWebVitals';
import RouterBlog from './RouterBlog';

//router
import {BrowserRouter} from 'react-router-dom';

//redux
import { Provider } from'react-redux';
import store from './Redux_uygulama/store';  // Correct for default export


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*/<App /> */}
    {/* <ClassComponentsTutorial/> */}
    {/* <FunctionComponentsTutorial/> */}

    <BrowserRouter>         {/* Backenden gelen verileri görmek içn BrowserRouter kullanırız */}

      <Provider store = {store} >       {/* Redux Login */}

      
          <RouterBlog/>
        
      </Provider>




    </BrowserRouter>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
