import { useContext, useState } from "react";
import { myContext } from "./App";
import { Link, useNavigate } from "react-router-dom";
import { MondayAlbum } from "./album";
import './input.css'

export default function Menu(){
    const context = useContext(myContext);
    if (!context) {
       console.error("Menu is not inside myContext.Provider");
    }
    const { menuVisible, handleMenuVisiblity, handleWedase } = context || {};

    const [yeEletuVisible, setYeEletu] = useState(false);
    function handleYeEletuVisibility(){
        setYeEletu((prevState)=>!prevState)
    }
    
   const handleSelectedWedase = (id) =>{
       handleWedase(id)
       handleMenuVisiblity()
   }

    return(
        <div className={` h-full bg-transparent text-white p-4 z-10 fixed top-0 left-0 bottom-0 w-52 bg-white transition-all  duration-700 ease-out overflow-y-auto ${menuVisible ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-60`}>
            {console.log("menuVisible inside JSX:", menuVisible)} 
            <div className="">
                <img src="\assets\other\left-arrow.png" alt="" className="ml-auto " onClick={handleMenuVisiblity} width={25} height={25}/>
                <ul className="text-red-900 mt-7">
                    <li className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <h2>ዘዘሰኑይ</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt="" onClick={handleYeEletuVisibility}/>
                        </div>
                        {yeEletuVisible && 
                        <div className="flex justify-start">
                            <ul className="flex flex-col ml-2 lg:ml-10">
                                
                                <li className="" onClick={()=>handleSelectedWedase(1)}>1. ፈቀደ</li>
                                <li className="" onClick={()=>handleSelectedWedase(2)}>2. ለሔዋን</li>
                                <li className="" onClick={()=>handleSelectedWedase(3)}>3. ኢየሱስ</li>
                                <li className="" onClick={()=>handleSelectedWedase(4)}>4. ርእየ</li>
                                <li className="" onClick={()=>handleSelectedWedase(5)}>5. ተፈሣህ</li>
                                <li className="" onClick={()=>handleSelectedWedase(6)}>6. ዘሃሎ</li>
                                <li className="" onClick={()=>handleSelectedWedase(7)}>7. ተፈሥሒ ኦ ቤተልሔም</li>
                                <li className="" onClick={()=>handleSelectedWedase(8)}>8. ትትፌሣሕ</li>
                                <li className="" onClick={()=>handleSelectedWedase(9)}>9. ብርሃን</li>
                            </ul>
                        </div>}
                        </li>
                    <li className="">
                        <div className="flex justify-between items-center">
                            <h2>ዘሰሉስ</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt=""/>
                        </div>
                        </li>
                    <li className="">
                        <div className="flex justify-between items-center">
                            <h2>ዝረቡእ</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt=""/>
                        </div>
                        </li>
                    <li className="">
                        <div className="flex justify-between items-center">
                            <h2>ዝሀሙስ</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt=""/>
                        </div>
                        </li>
                    <li className="">
                        <div className="flex justify-between items-center">
                            <h2>ዘአርብ</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt=""/>
                        </div>
                        </li>
                    <li className="">
                        <div className="flex justify-between items-center">
                            <h2>ዘቀዳሚት</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt=""/>
                        </div>
                        </li>
                    <li className="">
                        <div className="flex justify-between items-center">
                            <h2>ዘሰንበት</h2> <img className="w-12 h-12" src="\assets\other\down-arrow.png" alt=""/>
                        </div>
                        </li>
                </ul>
            </div>
        </div>
    )
}