
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Dashboard from './pages/user/Dashboard'
import PrivateRout from './components/Routes/Private'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminRoute from './components/Routes/AdminRoute'


function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/dashboard' element={<PrivateRout/>}>

    <Route path='user' element={<Dashboard/>}/>
    </Route>
    <Route path='/dashboard' element={<AdminRoute/>}>

    <Route path='admin' element={<AdminDashboard/>}/>
    </Route>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='*' element={<PageNotFound/>}/>
   </Routes>
    </>
  )
}

export default App
