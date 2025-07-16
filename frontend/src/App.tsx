import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing_page'
import Login from './pages/Login'
import './index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App