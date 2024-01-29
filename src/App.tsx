import './App.css'
import Home from './components/pages/home/home'
import { Routes, Route } from 'react-router-dom'
import RealmeC33 from './components/pages/realmeC33/realmeC33'
import Basket from './components/pages/ basket/ basket'
import { counter } from './components/store/store'

/* import { MobXProvider, useMobXStore } from './components/store/context' */

export default function App() {
  
  return (
   

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realmeC33" element={<RealmeC33 />} />
        <Route  path="/basket" element={<Basket  />}/>
      </Routes>
    </>
    
  );
}
