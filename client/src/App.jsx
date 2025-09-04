import './App.css'
import Login from './Pages/Auth-pages/Login'
import Signup from './Pages/Auth-pages/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
