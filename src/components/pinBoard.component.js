
import React, { useRef, useState, useEffect} from 'react';
import { Pin } from './pin.component'
import { PinCloseUp } from './pinCloseUp.component'

function useComponentVisible(initialIsVisible) {
    const [pinSelected, setPinSelected] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickModal = (e) => {
        if (ref.current && !ref.current.contains(e.target)){
            console.log("outside");
            setPinSelected(null);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickModal, true);
        return () => {
            document.removeEventListener('click', handleClickModal, true)
        };
    });

    return { ref, pinSelected, setPinSelected };
}


export default function PinBoard(props) {
    //const [pinSelected, setPinSelected] = useState(null);
    var listOfPins = []
    listOfPins.push( { imgSource : "/fox.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxSnowBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/fox.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxSnowBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/fox.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxSnowBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxSnowBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxSnowBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxSnowBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxSnowBig.jpg" , alt : "forest dog"} )
    listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )

    function renderListOfPins(a){
        return( a.map( pin => { return <Pin 
            imgSource = {pin.imgSource} 
            alt = {pin.alt} 
            selectPin = { pinSelection => setPinSelected(pinSelection)}
              /> 
            })
        );
    };

    const { ref, pinSelected, setPinSelected } = useComponentVisible(null)

return( !pinSelected ? (
    <div className = "board">
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(0,3)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(3,6)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(6,9)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(6,9)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(9,12)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(12,15)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(15,18)) }</div>

    </div>
        ) : 
        (   <PinCloseUp imgSource = {pinSelected} ref = {ref} /> )   
        
    )
}

export { PinBoard }