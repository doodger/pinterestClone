import React, { useRef, useState, useEffect} from 'react';



export default function Pin(props) {




return(
	<div className = "pinWrapper">
			<div className = "pinPreview" onClick = { () => { console.log("here is ", props.id); props.selectPin(props.id)}} >
			<img src = {props.imgSource} 
				alt = {props.alt} 
				/>
			</div>
	
			

		
	</div>
	)
}

export { Pin }