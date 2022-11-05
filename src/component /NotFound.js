import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


function NotFound() {
    return (
      
      <div className="text-center">
      <Helmet>
        <title>Not NotFound</title>
        <meta name="descripiton" content="Error Page"/>
      <meta name="Keywords" content="Error"/>
    </Helmet>

        <h2 className="text-2xl ">OPS!.. YOU STUMBLED ON THE WRONG BLOCK</h2>
        <h1 className="text-8xl">404 ERROR</h1>
       <button className="px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
       <Link to="./">
        Click here to go back to Base
        </Link>
        </button>
        {/* <Link to="./"></Link> */}
      </div>
    );
  }
  
  export default NotFound;