import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header =() =>{
    return(
        
        <div className="header">
        <div className="headerLeft">
        <Link to="/" style={{textDecoration:"none"}}><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="#" /></Link>
        <Link to="/movies/popular" style={{textDecoration:"none"}}><span>popular</span></Link>
        <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>top_rated</span></Link>
        <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>upcoming</span></Link>

        
        </div>
        
        
        </div>
        
        
        
    )
}

export default Header;