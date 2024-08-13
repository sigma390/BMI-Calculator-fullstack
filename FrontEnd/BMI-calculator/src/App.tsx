

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './components/signup';

import { RecoilRoot } from 'recoil';
import './App.css';
import BMI from './components/bmi';
import Charts from './components/charts';

function App() {
  

  return (
    <div style={{width:"100vw",
    height:"100vh",
    backgroundColor:"#eeeeee"}}>
      
      <RecoilRoot>
      <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path='/' element={<BMI/>}/>
                <Route path='/charts' element={<Charts/>}/>
                
            </Routes>
        </Router>
      </RecoilRoot>
     
      
    </div>
  )
}

export default App
