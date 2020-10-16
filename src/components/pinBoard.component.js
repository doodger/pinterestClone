
import React, { useRef, useState, useEffect} from 'react';
import { Pin } from './pin.component'
import { PinCloseUp } from './pinCloseUp.component'
import axios from 'axios'


export default function PinBoard(props) {
    const [pinSelected, setPinSelected] = useState(null);
    const [collectionOfPins, setCollectionOfPins] = useState( { pins : []} );

     useEffect( () => {
        axios.get('http://localhost:5000/api/pins')
        .then( response => { console.log("first",response.data.pins);
                const newPinCollection = { pins : response.data.pins} 
                setCollectionOfPins( newPinCollection );
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
        console.log("and here ", collectionOfPins["pins"][0])
        return( a.map( pin => { return <Pin
            id = {pin.id} 
            imgSource = {pin.imgSource} 
            alt = {pin.alt}
            title = {pin.title}
            body = {pin.body} 
            selectPin = { pinSelection => setPinSelected(pinSelection)}
              /> 
            })
        );
    };

//listOfPins.slice(0,3)
return( !pinSelected ? (
  
    <div className = "board">
        <div className = "rowOfPins" > { renderListOfPins( collectionOfPins["pins"] ) }</div>

    </div>
        ) : 
        (   //todo: the use of -1 in the index is potentially dangerous for arrays of pins that are empty
            <PinCloseUp imgSource = {collectionOfPins["pins"][pinSelected-1].imgSource}
            alt =  {collectionOfPins["pins"][pinSelected-1].alt}
            title = {collectionOfPins["pins"][pinSelected-1].title}
            body = {collectionOfPins["pins"][pinSelected-1].body}
            selectPin = { pinSelection => setPinSelected(collectionOfPins["pins"][pinSelection] ) } /> )   
        
    )
}

export { PinBoard }