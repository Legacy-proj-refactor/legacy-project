import React from 'react';
import YouTube from 'react-youtube';
import './Bas.css';

function Bas() {
    const videoId = `78I9vSem9OQ`

    return (
        <div className="container">
            <h1>COMING SOON</h1>
            <YouTube videoId={videoId} />
        </div>
    );
}

export default Bas;
