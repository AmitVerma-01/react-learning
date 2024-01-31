import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){

    const data = useLoaderData();
     
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/amitverma-01')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data)
    //         console.log(data);
    //     })
    // },[])
    return(
       <div className="flex items-center mx-24 justify-around bg-gray-400 p-20">
            <div>
                <img className="rounded-full" width={300} src={data.avatar_url} alt="" />
            </div>
            <div className="info bg-slate-300 text-lg font-semibold bg-opacity-60  p-7 rounded-md shadow-md">
                <h1>Name : {data.name}</h1>
                <h1>UserName : {data.login}</h1>
                <h1>Followers : {data.followers}</h1>
                <h1>Following : {data.following}</h1>
                <h1>Repos : {data.public_repos}</h1>
                <br />
                <a href={data.html_url} target="_blank" className=" border-2 p-2 px-3 rounded-md bg-gray-700 border-transparent text-white hover:opacity-90 "> visit </a>
            </div>
       </div>
    )
}

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/amitverma-01');
    return response.json();
}