import MySwiper from "./mySwipper"

export default function DisplayWedase({wedase}){
    console.log("i am rendering")
    console.log(wedase.img)
    let img = []
    if (wedase.img.length >= 1){
        for(let i = 0; i < wedase.img.length; i++){
             img.push(wedase.img[i])
        }
    }
    console.log(img)
    return(
       <div className="flex flex-col w-full h-full">
         <div className="flex justify-center items-center m-5 h-1/2 rounded-lg shadow-[0px_0px_1px_rgba(0,0,0,0.9)]">
           {<MySwiper wedase={wedase}/>}
         </div>

       </div>
    )
}