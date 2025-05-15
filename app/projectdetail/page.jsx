'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
   const {id}=useParams()
   const [project, setProject]=useState(null)
   useEffect(()=>{
    fetchData()
   },[])
   const fetchData=async()=>{
    const response=await axios.get(`http://localhost:3005/${id}`)
    if(response.data.success){
        setProject(response.data.result)
    }
    console.log(response)
   }
//    console.log(id)
  return (
    <div className="container mt-5">
      <h2 className="fw-bold">{project?.title}</h2>
      <p className="text-muted">{project?.description}</p>
    </div>
)
}

export default page