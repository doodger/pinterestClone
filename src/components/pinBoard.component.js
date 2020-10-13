
import * as React from 'react';
import { Pin } from './pin.component'


export default function PinBoard(props) {
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
        return( a.map( pin => { return <Pin imgSource = {pin.imgSource} alt = {pin.alt}/> }) );
    };

      

    /**
    <Pin imgSource = {listOfPins[0].imgSource} alt = {listOfPins[0].alt} />
    <Pin imgSource = "/foxPortraitBig.jpg" alt = "forest dog" />
    <Pin imgSource = "/foxSnowBig.jpg" alt = "forest dog" /> **/

return(
    <div className = "board">
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(0,3)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(3,6)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(6,9)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(6,9)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(9,12)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(12,15)) }</div>
        <div className = "rowOfPins" > { renderListOfPins(listOfPins.slice(15,18)) }</div>

    </div>
    )
}

export { PinBoard }