import React, { useEffect, useState } from 'react'

const Github = () => {
    const[data,setData]=useState([])
 useEffect(()=>{
    fetch('https://api.github.com/users/shobhitk98')
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        setData(data)
        
    })

 },[])
  return (
    <div className=' bg-gray-800 text-white text-3xl'>

        <h2>I am Generating all of my data from github with using API</h2>
      Github Followers:{data.followers}
      <p> Github Following :{data.following}</p>
      <p> Github Name :{data.name}</p>
      <p> Github Bio :{data.bio}</p>



      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
