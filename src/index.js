import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoursePage from './Components/CoursePage/CoursePage';
import CourseSingle from './Components/CourseSingle/CourseSingle';
import courseslist, { CoursesBody, CoursesBody2 } from './Components/CourseList/courseslist';
import CreateCourse from './Components/CreateCourse/createcourse';
import Login_Register from './Components/Login_Register/Login_Register';
import Profile from './Components/Profile/Profile';
import Purchases from './Components/Purchases/Purchases';
import Systems from './Components/Settings/Systems';
import Error from './Components/Error/Error';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';
import HomepageUser from './Components/HomepageUser/HomepageUser';
import StudentAccountList, { StudentAccount } from './Components/Admin/StudentAccount';
import Revenue from './Components/Admin/Revenue';
import { InstructorAccount } from './Components/Admin/InstructorAccount';
import CourseManagementList from './Components/Admin/CourseManagement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login_Register />} />
        <Route path='/login' element={<Login_Register />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/FAQ' element={<FAQ />} />
        {/* <Route path='/admin' element={<Admin />} /> */}
        {/* <Route path='/instructor/:uId' element={<Instructor />} /> */}
        {/* <Route path='homepageUser/addToCart/:uId' element={<AddToCart />} /> */}
        <Route path='/homepageUser/:uId' element={<HomepageUser />} />
        <Route path='/homepageUser/:uId/allCourse' element={<CoursesBody2 />} />
        <Route path='/homepageUser/:uId/category/:cateId' element={<CoursesBody />} />
        <Route path='/homepageUser/:uId/course/:cId' element={<CourseSingle />} />
        <Route path='/homepageUser/:uId/course/coursepage/:cId' element={<CoursePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
