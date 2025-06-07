import { useState, useMemo, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './navbar'
import Menu from './menu';
import CloseMenu from './closeMenu'
import Monday from './Monday';
import Home from './Home';
import { MondayAlbum } from "./album";

export const myContext = createContext(null);
function App() {
  const [menuVisible, setMenuVisiblity] = useState(false)

  const [selectedWedase, setWedase] = useState(null)

  function handleWedase(id){
        console.log("i am not the problem")
        console.log(selectedWedase)
        console.log(id)
        setWedase(MondayAlbum.find(song => song.id === id));
    };

  function handleMenuVisiblity(){
    setMenuVisiblity((prevState)=>!prevState)
    console.log(menuVisible)
  }
  const contextValue = useMemo(() => ({ menuVisible, handleMenuVisiblity, handleWedase }), [menuVisible]);
  return (
    <Router>
     
      <myContext.Provider value={contextValue}>
      <NavBar />
      <CloseMenu/>
      <Menu />
      <Routes>
        <Route path='/' element={<Home wedase={selectedWedase}/>}/>
      </Routes>
      </myContext.Provider>
    </Router>
      
  )
  
}

export default App;
