import { useState } from "react"
import MySwiper from "./mySwipper"
import MyMusicPlayer from "./musicPlayer"
import Menu from "./menu"

export default function Home({wedase}){
    if(wedase){
        console.log("i am available")
    }
    console.log("i am not available")
    return(
        <div className="h-screen w-full ">
          <div className="md:ml-60 h-full max-w-full flex justify-center   md:flex  md:justify-around md:flex-row-reverse ">
              
              <div className="flex flex-col justify-center mb-5 max-w-[350px]   xs:backdrop-blur-lg xs:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)]"> 
                <div className="flex justify-center items-center m-5 mb-0  h-1/2 rounded-lg shadow-[0px_0px_1px_rgba(0,0,0,0.9)] ">
                  {<MySwiper wedase={wedase}/>}
                </div>
                <div className="m-5 mt-0 md:mb-0 h-1/3 flex items-end ">
                   <MyMusicPlayer wedase={wedase}/>
                </div>
              </div>
          </div>
        </div>
     )

}