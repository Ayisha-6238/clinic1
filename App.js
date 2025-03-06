import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Hero from "./Components/Hero"
import Navbar from './Components/Nav'
import About from "./Components/AboutPage"
import ServicesPage from './Components/ServicePage'
import DoctorsPage from './Components/DoctorPage'
import ContactUs from "./Components/ContactUs"
import MakeAppointment from "./Components/MakeAppoinment"
// import Service from "./Components/ServicePage"
function App() {
  return (
    <div>
        <Navbar/>
<Routes>

  <Route path='/' element={<Hero/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/Doctors' element={<DoctorsPage/>}/>
  <Route path='/contact' element={<ContactUs/>}/>
  <Route path='/appointment' element={<MakeAppointment/>}/>
  <Route path='/services' element={<ServicesPage/>}/>

</Routes>

    </div>
  )
}

export default App
