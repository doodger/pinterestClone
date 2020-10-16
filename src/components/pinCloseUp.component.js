import React, { useRef, useState, useEffect} from 'react';



export default function PinCloseUp(props) {
	//before 
    const ref = useRef();

	const handleClickModal = (e) => {
		console.log(ref);
		var isClickInside = (ref.current == null? isClickInside=true : ref.current.contains(e.target)) ;
        if ( !isClickInside){
    	   	document.removeEventListener("mousedown", handleClickModal);
	    	props.selectPin(null);
	        }

      
    }
    


	
	useEffect(
		() => {
				document.addEventListener('click', handleClickModal, true);
			},
			[ref]
	);



return(
        <div className = "pinCloseUp" ref = {ref} >
        	<div> <img src = {props.imgSource} alt = {props.alt}/> </div>
        	<div className = "text" > <h1> {props.title} </h1><br/>
        	 <p> {props.body}</p> </div>

        </div> 

	)
}

export { PinCloseUp }