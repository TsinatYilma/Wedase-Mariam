import { useContext } from "react"
import {myContext}  from "./App"
import { Link } from "react-router-dom";

export default function NavBar(){
    const context = useContext(myContext);
    if (!context) {
       console.error("NavBar is not inside myContext.Provider", context);
    }

   const { handleMenuVisiblity } = context || {};
    
    return (
        <div className="flex justify-between m-5 bor-black">
            <div className="">
                <img src="\assets\other\menu.png" alt="" width={25} height={25} onClick={handleMenuVisiblity}/>
            </div>
            <div className="">
                <Link to={"/"}><img src="\assets\other\marry.ico" alt="" width={30} height={30} /></Link>
            </div>
        </div>
    )
}