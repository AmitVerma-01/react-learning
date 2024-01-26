import React, { useEffect, useState } from "react";

export default function Github(){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/amitverma-01')
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
            console.log(data);
        })
    },[setData])
    return(
       <div className="flex items-center justify-around bg-gray-400 p-20">
            <div>
                <img className="rounded-full h-60" src={data.avatar_url} alt="" />
            </div>
            <div className="info mr-10 bg-slate-300 text-lg font-semibold bg-opacity-60 h-72 w-72 p-3 rounded-md shadow-md">
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