import Login from "./Components/Auth/Login"
import Register from "./Components/Auth/Register"
import Logout from "./Components/Auth/Logout"
import Subscribe from "./Components/Students/Courses/Subscribe"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import {Layout} from "./Components/Layouts/Layout"
import LanguageSelector from "./LanguageSelector"
import AddCourse from "./Components/Teachers/Dashboard/AddCourse"
import AddSection from "./Components/Teachers/Dashboard/AddSection"
import AddSectionModule from "./Components/Teachers/Dashboard/AddSectionModule"
import CourseList from "./Components/Teachers/Dashboard/CourseList";
import CourseDetails from "./Components/Teachers/Dashboard/CourseDetails"

import PrivateRoute from "./Components/PrivateRoute.jsx";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route element={<PrivateRoute/>}>
                <Route path="/add/course/" element={<AddCourse/>}/>
                <Route path="/add/course/section/" element={<AddSection/>}/>
                <Route path="/add/course/section/module" element={<AddSectionModule/>}/>
                <Route path="/instructor/course/" element={<CourseList/>}/>
                <Route path="/instructor/course/:slug" element={<CourseDetails/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Route>

            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
      </Route>
    )
  )
  return (
    <>
       {/* <LanguageSelector /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
