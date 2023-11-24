

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup';

import './App.css'
import {RecoilRoot} from 'recoil';
import BMI from './components/bmi';

function App() {
  

  return (
    <div style={{width:"100vw",
    height:"100vh",
    backgroundColor:"#eeeeee"}}>
      
      <RecoilRoot>
      <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path='/BMI' element={<BMI/>}/>
                
            </Routes>
        </Router>
      </RecoilRoot>
     
      
    </div>
  )
}

export default App
