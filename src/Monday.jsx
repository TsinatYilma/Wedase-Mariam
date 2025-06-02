import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MondayAlbum } from "./album";
import DisplayWedase from "./displayWedase";



export default function Monday(){
    const {id} = useParams()
    const [selectedWedase, setWedase] = useState(null)
    
    useEffect(() => {
        setWedase(MondayAlbum.find(song => song.id.toString() === id));
    }, [id]);
       console.log(selectedWedase)
    return(
        <div className="w-full h-screen">
         {selectedWedase ? <DisplayWedase wedase={selectedWedase} /> : <p>wedase not found</p>}
        </div>
    )
   
}