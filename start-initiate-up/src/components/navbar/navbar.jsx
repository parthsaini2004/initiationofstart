import React from 'react';
import '../navbar/navbar.css';
import search from '../navbar/Group 1.png';
import halfrectangle from '../navbar/Rectangle 3.svg';
import groupicsearch from '../navbar/Group 2.svg';



const Navbar = () => {
    return (
        <>
        
            <div>

            
            <nav className="navbar navbar-expand-lg navbar-light bg-light navcolor">
  {/* <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto spacenav">
      
      <li className="nav-item dropdown ">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Internship
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Jobs
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Courses
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>

    {/*<form className="form-inline">
        <div className="searchbox">
     <input className="form-control " type="search" placeholder="Search" aria-label="Search" /> */}
    {/* <button className="btn" type="submit"> */}
        {/* <img className="search" src={search} alt="" />
        <img className="halfrectangle" src={halfrectangle} alt="" /> 
        <img className="groupicsearch" src={groupicsearch} alt="" />
    </button>
    </div>
  </form>
  */}
  <div className="leftnav">
   <form className="form-inline">
    <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-secondary mr-sm-5 searchnav" type="submit">Search</button>
    <button className="btn btn-success  mr-sm-2 loginnav" type="submit"><a href="/loginbar">Login</a></button>
    <button className="btn btn-outline-dark mr-sm-5  " type="submit"><a href="/signup">Register</a></button>
    <div className="vl"></div>
    <div className="hire">
    <a href="">Hire Talent</a>
    </div>
  </form>
  </div>
  
    
  </div>
</nav>

            </div>
        </>
    )
}

export default Navbar