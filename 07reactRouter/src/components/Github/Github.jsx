import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         setdata(data)
    //     }) 
    //     }, [])
    
         
    return(
        <div className="text-center m-4 bg-gray-800 text-white text-3xl">
            
            Github Followers:  {data.followers}
            
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}