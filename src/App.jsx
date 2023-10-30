import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AddressDetails from './pages/AddressDetails'
import PersonalDetails from './pages/PersonalDetails'


import './App.css'

function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/address/:id" element={<AddressDetails />}/>
        <Route path="/personal/:id" element={<PersonalDetails />}/>
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
