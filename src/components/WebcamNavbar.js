//navbar with open cv

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import myntralogo from './images/myntralogo.png';
import camera from './images/camera.png';
export default function Navbar() {
    const [showWebcam, setShowWebcam] = useState(false);
    const webcamRef = useRef(null);

    const toggleWebcam = () => {
        setShowWebcam(!showWebcam);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={myntralogo} style={{width:'5rem', height:'4rem'}} alt="Myntra Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:'1.5rem'}}>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="#">Men</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="#">Women</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#">Kids</a>
                            </li>
                        </ul>
                        <form className="d-flex mx-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <button className="btn btn-outline-success mx-3" style={{fontSize:'1rem'}}>Wishlist</button>
                        <button className="btn" onClick={toggleWebcam}>
                            <img src={camera} style={{width:'2rem', height:'2rem'}} alt="Camera" />
                        </button>
                        <div>
                            <h6 style={{fontSize:'1.5rem'}}>Try here</h6>
                            {showWebcam && (
                                <Webcam
                                    audio={false}
                                    height={720}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    width={1280}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}