import React from 'react';
import FreeCodeCampLogo from '../imagenes/freecodecamp-logo.png';

const Logo = () => (
    <div className='freecodecamp-logo-contenedor'>
        <img 
            className='freecodecamp-logo' 
            src={FreeCodeCampLogo}
            alt='Logo de FreeCodeCamp'/> 
    </div>
);

export default Logo;