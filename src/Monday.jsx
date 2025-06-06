import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MondayAlbum } from "./album";
import DisplayWedase from "./displayWedase";



export default function Monday(){
    const [selectedWedase, setWedase] = useState(null)
    
    function handleWedase(id){
        setWedase(MondayAlbum.find(song => song.id.toString() === id));
    };
       console.log(selectedWedase)
    return(
        <div className="w-full h-screen">
         {selectedWedase ? <DisplayWedase wedase={selectedWedase} /> : <p>wedase not found</p>}
        </div>
    )
   
}