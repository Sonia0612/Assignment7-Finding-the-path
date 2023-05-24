import { useState } from "react";
import * as constant  from "../utils/constant";
import { Link } from "react-router-dom";

const Header=()=>{
    const [isLogged,setIsLogged]=useState(false);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constant.LOGO_URL} alt='lOGO here'/>
            </div>
            <h1 className="heading">Food Corner</h1>
            <div className="nav-list">
                <ul>
                    <Link to="/"><li>home</li></Link>
                    <Link to="/about"><li>about</li></Link>
                    <Link to="/contact"><li>contact us</li></Link>
                    
                    {/* <li>cart</li> */}
                </ul>
            </div>
            {isLogged?<button className="log" onClick={()=>setIsLogged(false)}>Logout</button>:<button className="log" onClick={()=>setIsLogged(true)}>Login</button>}
        </div>
    )
}
export default Header;