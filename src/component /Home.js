import React from "react"
import { Helmet } from "react-helmet";
import octocat from '../Octocat.png';


function Home() {

    return(
    <div> 
    <Helmet>
        <title>Homepage</title>
        <meta name="descripiton" content="Daniels Github Homepage"/>
      <meta name="Keywords" content="Github, Daniel, Repositories, Dveloper"/>
    </Helmet>
    <img className="w-2/12 m-auto"  src={octocat} alt="github logo"/>
          <h1 className="text-center text-emerald-400 text-5xl  ">
          Welcome to Daniels GitHub Profile Page.
        </h1>
        
        <p className="text-center text-2xl my-8 "> From this site you can have access to my list of Repositories  </p>
        <p className="font-bold text-emerald-400">  Also I have Implimented:</p>
        <ul className=" space-y-1.5 ">
            <li className="text-1xl">
                Error boundary
            </li>
            <li>
                Routes
            </li>
            <li>
                SEO Friendly
            </li>
            <li>
                API from my GitHub Repository
            </li>
            <li>
                Notfound Page (404 page)
            </li>
        </ul>
    </div>
    )
    }

    export default Home;