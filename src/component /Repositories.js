import React from "react";
import { useState, useEffect } from "react"
import Loading from "../Loading";
import Profile from "../Profile"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Pagination from "../pagenation";

function Repository(){
    const [items, setItems] = useState()

    useEffect(() => {
      const fetchRepos = async () => {
        const res = await fetch(
          `https://api.github.com/users/udofa18/repos`
        )
        const data = await res.json()
        setItems(data)
        console.log(data)
      
    

        }
         fetchRepos() 
    }, [])

      


    return(
      
<div>

<Helmet>
        <title>Repositories</title>
        <meta name="descripiton" content="Daniels Github Repositories"/>
      <meta name="Keywords" content="Github, Daniel, Repositories, Dveloper"/>
    </Helmet>
Click <Link to="/FirstRepo" className="text-emerald-400" > Here</Link> to see Details of First Repo,
{!items ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
        {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
      
  <div>{Pagination}</div>


</div>
)
}




export default Repository