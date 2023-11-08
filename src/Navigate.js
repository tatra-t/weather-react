import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App2.css"

export default function Navigate(){
return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Weather in World</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search city" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="col-8"></div>
            <div className="col-4 curLoc">
            <a href="">select current location </a></div> 
        </nav>

)

}