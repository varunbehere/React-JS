import React from "react";
import { useParams } from "react-router-dom";

export default function User (){
    const {userid} = useParams();
    return (
        <div className="text-center my-10 text-xl">User  : {userid  }</div>
    )
}