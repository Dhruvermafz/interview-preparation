import React from 'react'
import {Link, useLocation} from "react-router-dom"

const Breadcrumps = () => {
    const location  = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x)
    let breadcrumpPath = "";
  return (
    <div className='breadcrumbs'>
        <Link to="/">Home</Link>
        {pathnames.map((name, index) => {
            breadcrumpPath += `/${name}`
            const isLast = index === pathnames.length - 1;
            console.log(pathnames, breadcrumpPath)

            return isLast ? (
                <span key={breadcrumpPath}> / {name} </span>
            ) : (
                <span key={breadcrumpPath}>
                    {" "}
                    / <Link to={breadcrumpPath}>{name}</Link>
                </span>
            )
        })}
      
    </div>
  )
}

export default Breadcrumps
