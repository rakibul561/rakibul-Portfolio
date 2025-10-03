"use server"

import { FieldValues } from "react-hook-form";


export const login = async (data:FieldValues) =>{
   
     const res = await fetch(`${process.env.NEXT_BASE_API}/api/auth/login`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
     });

     if(!res?.ok){
        console.error("login faield")
     }

     return await res.json()
}