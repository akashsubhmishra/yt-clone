import React from "react";
import Header from './Header'
import Sidebar from './Sidebar'
import './404page.css';

function PageNotFound(){
    return (
        <div className="main-404">
            <Header />
            <div className="page-404">
                <Sidebar className='side-404' />
                <div className="Page404">
                    <h1>Something went wrong...</h1>
                    <img className="img" src="https://ih1.redbubble.net/image.413915805.1510/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" alt="Page Not Found" />
                </div>
            </div>
        </div>
    )
}
export default PageNotFound;