//navbar without open cv
import React from 'react'
import WebcamNavbar from './WebcamNavbar'
import myntralogo from './images/myntralogo.png'
import camera from './images/camera.png'

export default function Navbar() {

  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src={myntralogo} style={{width:'5rem', height:'4rem'}}></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:'1.5rem'}}>
                    <li class="nav-item mx-3">
                    <a class="nav-link active" aria-current="page" href="#">Men</a>
                    </li>
                    <li class="nav-item mx-3">
                    <a class="nav-link active" aria-current="page" href="#">Women</a>
                    </li>
                    <li class="nav-item mx-2">
                    <a class="nav-link active" aria-current="page" href="#">Kids</a>
                    </li>
                </ul>
                <form class="d-flex mx-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button class="btn btn-outline-success mx-3" style={{fontSize:'1rem'}}>Whishlist</button>
                {/* <button onClick={openWebcame}> */}
                <button >
                    <a><img src={camera} style={{width:'2rem' , height:'2rem' }}></img></a>
                </button>
                <div>
                    <h6  style={{fontSize:'1.5rem'}}>Try here</h6>    
                    
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
