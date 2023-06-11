import React, { useEffect } from 'react';

const UnityComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = //agrega el path al index.html de los webgl del unity;
        script.async = true;
        script.onload = () => {
    };

    document.body.appendChild(script);

    return () => {
        const container = document.getElementById('unityContainer');
        container.innerHTML = '';
    };
}, []);

return <div id="unityContainer"></div>;
};

export default UnityComponent;
