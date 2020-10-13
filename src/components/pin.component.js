import React, { useRef, useState, useEffect} from 'react';

function useComponentVisible(initialIsVisible) {
	const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
	const ref = useRef(null);

	const handleClickModal = (e) => {
		if (ref.current && !ref.current.contains(e.target)){
			setIsComponentVisible(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickModal, true);
		return () => {
			document.removeEventListener('click', handleClickModal, true)
		};
	});

	return { ref, isComponentVisible, setIsComponentVisible };
}


export default function Pin(props) {


	//const [isOpen, setOpen]  = useState(false);
	const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

	/** const handleShowDialog = (e) => { //on image click, pop up dialogue
		e.preventDefault();
		//isOpen = true;
		//setOpen( !isOpen);
		console.log('clicked ', props.imgSource);
	}; **/



return(
	<div ref = {ref} className = "pinWrapper">
			<div className = "pinPreview" onClick = { () => setIsComponentVisible(true)} >
			<img src = {props.imgSource} 
				alt = {props.alt} 
				/>
			</div>
	
			{isComponentVisible && (
				<dialog
					open
				>

					<img className = "image"
						src = {props.imgSource}
						alt = "no image"
					/>

				</dialog>
			)}

		
	</div>
	)
}

export { Pin }