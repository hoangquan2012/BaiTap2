import React from "react";

function Header(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
            <div className="container">
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="cart.html">Giỏ hàng</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Header;