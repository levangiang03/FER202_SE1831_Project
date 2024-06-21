import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage/Homepage';
import CoursePage from './Components/CoursePage/CoursePage';
import CourseSingle from './Components/CourseSingle/CourseSingle';
import Header from './Components/Homepage/Header';
import Footer from './Components/Homepage/Footer';
import ProfileInstructor from './Components/ProfileInstructor/ProfileInstructor';
import CreateCourse from './Components/CreateCourse/CreateCourse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header/>
    <CourseSingle/>
    <Footer/> */}
    {/* <Homepage/> */}
    <CoursePage/>
    {/* <ProfileInstructor/> */}
    {/* <CreateCourse/> */}
  </React.StrictMode>
)