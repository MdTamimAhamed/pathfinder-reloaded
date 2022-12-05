import React from 'react'
import Dashboard from './components/app-home/Dashboard'
import ScoresMain from './components/app-pages/ScoresMain'
import JournalMain from './components/app-pages/JournalMain'
import EmployeesMain from './components/app-pages/EmployeesMain'
import CompanyProfile from './components/app-pages/CompanyProfile'
import PersonalProfile from './components/app-pages/PersonalProfile'
import LoginOrSignup from './components/login-or-signup/LoginOrSignup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login-signup' element={<LoginOrSignup/>}/>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/score' element={<ScoresMain />}/>
          <Route path='/journal' element={<JournalMain />}/>
          <Route path='/employees' element={<EmployeesMain />}/>
          <Route path='/company-profile' element={<CompanyProfile/>}/>
          <Route path='/personal-profile' element={<PersonalProfile />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;