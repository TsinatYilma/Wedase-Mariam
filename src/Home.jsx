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
        <div className="min-h-full w-full flex justify-center ">
          <div className=" h-full w-full max-w-[400px] md:max-w-full  md:flex md:flex-row-reverse md:justify-around lg:m-10   md:gap-20 md:backdrop-blur-lg md:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)]">
              <div className="flex flex-col md:justify-between max-w-[450px] h-screen md:gap-14  md:h-full "> 
                <div className="flex justify-center items-center m-5 mb-0  h-1/2 rounded-lg shadow-[0px_0px_1px_rgba(0,0,0,0.9)] ">
                  {<MySwiper wedase={wedase}/>}
                </div>
                <div className="m-5 md:mb-0 h-1/4  flex items-end ">
                   <MyMusicPlayer wedase={wedase}/>
                </div>
              </div>
              <div className="flex-grow max-w-[450px] m-5 shadow-[0px_0px_1px_rgba(0,0,0,0.9)]">
                <Menu />
              </div>
          </div>
        </div>
     )

}