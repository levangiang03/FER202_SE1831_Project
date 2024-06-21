import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage/Homepage';
import CoursePage from './Components/CoursePage/CoursePage';
import CourseSingle from './Components/CourseSingle/CourseSingle';
import courseslist, { CoursesBody, CoursesBody2 } from './Components/CourseList/courseslist';
import createcourse from './Components/CreateCourse/createcourse';
import Login_Register from './Components/Login_Register/Login_Register';
import Profile from './Components/Profile/Profile';
import Purchases from './Components/Purchases/Purchases';
import CreateCourse from './Components/CreateCourse/createcourse';
import Systems from './Components/Settings/Systems';
import Error from './Components/Error/Error';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import CourseDetail from './Components/CourseDetail/CourseDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Homepage/> */}
    {/* <CoursePage/> */}
    <CourseDetail/>
    {/* <CourseSingle/> */}
    {/* <Login_Register/> */}
    {/* <CoursesBody/> */}
    {/* <CoursesBody2/> */}
    {/* <CreateCourse/> */}
    {/* <Profile/> */}
    {/* <Purchases/> */}
    {/* <Systems/> */}
    {/* <Error/>
    <Contact/>
    <FAQ/> */}
  </React.StrictMode>
)