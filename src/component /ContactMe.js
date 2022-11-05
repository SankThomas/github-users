import React from "react"
import { Helmet } from "react-helmet"




function Contact() {
    return (
    <div>
     <Helmet>
        <title>Contact</title>
        <meta name="descripiton" content="Daniels Github Contact page"/>
      <meta name="Keywords" content="Github, Daniel, Repositories, Dveloper, contact"/>
    </Helmet>
        <h1 className="text-emerald-400 text-2xl text-center">Contact Daniel Udofa Using the Following Social Media Handles:</h1>
        <ul>
            <li className="my-3 underline underline-offset-8 "><a href="https://www.linkedin.com/in/daniel-udofa-865778149/">Linkedin</a>
            </li>
            <li className="my-3 underline underline-offset-8 "><a href="https://github.com/udofa18"> GitHub</a>
            </li>
            <li className="my-3 underline underline-offset-8 "> <a href="https://twitter.com/Udofa18">Twitter</a>
            </li>
            <li className="my-3 underline underline-offset-8 "><a href="https://t.me/phantom6040">Telegram</a>
            </li>
        </ul>
    </div>
    
    )}
    export default Contact

