
import React, { useRef, useState, useEffect} from 'react';
import { Pin } from './pin.component'
import { PinCloseUp } from './pinCloseUp.component'
import axios from 'axios'


export default function PinBoard(props) {
    const [pinSelected, setPinSelected] = useState(null);
    const [collectionOfPins, setCollectionOfPins] = useState([]);

     useEffect( () => {
        axios.get('http://localhost:5000/api/pins')
        .then( response => { console.log("first",response.data.pins);
                console.log("here is ", response.data.pins); 
                setCollectionOfPins(response.data.pins);
                console.log("turned into ", collectionOfPins)
                
            }).catch( (error) => {
                console.log(error);
            });
    
    }, []);

    var listOfPins = []
    listOfPins.push( { imgSource : "/fox.jpg" , alt : "forest dog"} )
    /**listOfPins.push( { imgSource : "/foxPortraitBig.jpg" , alt : "forest dog"} )
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
    **/
   

    //listOfPins.push( { imgSource : collectionOfPins[0].imgSource ,
    // alt : collectionOfPins[0].alt} )

    //listOfPins.push( {collectionOfPins{1}})

    function renderListOfPins(a){
        console.log("and here ", collectionOfPins[0])
        return( a.map( pin => { return <Pin 
            imgSource = {pin.imgSource} 
            alt = {pin.alt} 
            selectPin = { pinSelection => setPinSelected(pinSelection)}
              /> 
            })
        );
    };


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
        (   <PinCloseUp imgSource = {pinSelected} selectPin = { pinSelection => setPinSelected(pinSelection)} /> )   
        
    )
}

export { PinBoard }