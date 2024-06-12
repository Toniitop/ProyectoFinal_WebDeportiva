import React from 'react';

const ImgFondo = () => {
    return (
        <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden">
            <img
                className="w-full h-full object-cover"
                src="/fondo.png"
                alt="Imagen de fondo"
            />
        </div>
    );
}

export default ImgFondo;
