import React, { useRef, useState, useEffect} from 'react';

/**function useComponentVisible(initialIsVisible) {
    const [pinSelected, setPinSelected] = useState(initialIsVisible);
    const ref = useRef(null);

    

   
    return { ref, pinSelected, setPinSelected };
}**/


export default function PinCloseUp(props) {
	//before 
    const ref = useRef();

	const handleClickModal = (e) => {
		console.log("reached the handler");
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
        	<div> <img src = {props.imgSource}/> </div>
        	<div className = "text" > <h1> Titre intéressant </h1><br/>
        	 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero urna, euismod nec metus at, tempus vestibulum est. Vestibulum a tristique eros, nec porttitor mi. Vivamus et turpis volutpat, mollis nulla vitae, sodales nunc. Suspendisse sollicitudin sapien eros, at dapibus metus bibendum ut. Cras nec lacus sollicitudin, commodo dui vitae, sagittis massa. Vestibulum quis justo ultrices, malesuada turpis ac, varius massa. Pellentesque euismod turpis mi, nec rutrum tortor sodales suscipit. Vestibulum lacus nunc, mattis ut venenatis at, 
        	ultrices nec lacus. Duis vitae fermentum augue. Morbi in molestie justo, non efficitur ante. Aenean vel consectetur metus.
        	</p> </div>

        </div> 

	)
}

export { PinCloseUp }