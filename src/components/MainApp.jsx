import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthProvider, { useAuth } from './AuthContext'
import LoginComponent from './LoginComponent'
import Navbar from './Navbar'
import DashBoard from './DashBoard'
import MainDashBoard from './MainDashboard/MainDashBoard'
import QuestionCreation from './crudQuestion/QuestionCreation'

const MainApp = () => {
  function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <Navbar/>
       
          <Routes>
          <Route path="/" Component={DashBoard} />
            <Route path='/login' Component={LoginComponent}/>
          
          <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <MainDashBoard />
                            </AuthenticatedRoute> 
                        } />
          <Route path='/welcome/:username/createQuiz' element={
                            <AuthenticatedRoute>
                                <QuestionCreation />
                            </AuthenticatedRoute> 
                        } />
        </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  )
}

export default MainApp
