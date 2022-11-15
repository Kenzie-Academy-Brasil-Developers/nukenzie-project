import React from 'react';
import image from "../../assets/illustration.svg"

const MainImage = () => {
    return ( 
        <>
        <img draggable="false" src={image} alt="logo" />
        </>
     );
}
 
export default MainImage;