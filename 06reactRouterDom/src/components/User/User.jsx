import React from "react";
import { useParams } from "react-router-dom";

export default function User (){
    const {userId} = useParams()
    return (
        <>
            <div className="text-center bg-gray-600 text-white p-4 text-2xl mx-60">User : {userId}</div>
        </>
    )
}