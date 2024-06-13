import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage/Homepage';
import CoursePage from './Components/CoursePage/CoursePage';
import CourseSingle from './Components/CourseSingle/CourseSingle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Homepage/> */}
    {/* <CoursePage/> */}
    <CourseSingle/>
  </React.StrictMode>
)