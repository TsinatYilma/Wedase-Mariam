import { useState, useMemo, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './navbar'
import Menu from './menu';
import CloseMenu from './closeMenu'
import Monday from './Monday';
import Home from './Home';

export const myContext = createContext(null);
function App() {
  const [menuVisible, setMenuVisiblity] = useState(false)
  function handleMenuVisiblity(){
    setMenuVisiblity((prevState)=>!prevState)
    console.log(menuVisible)
  }
  const contextValue = useMemo(() => ({ menuVisible, handleMenuVisiblity }), [menuVisible]);
  return (
    <Router>
     
      <myContext.Provider value={contextValue}>
      <NavBar />
      <Menu />
      <CloseMenu/>
      </myContext.Provider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/Monday/:id" element={<Monday />} />
      </Routes>
    </Router>
      
  )
  
}

export default App;
