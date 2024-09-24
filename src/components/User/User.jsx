 import React from 'react'
 import { useParams } from 'react-router-dom'
 
 const User = () => {
    const {userid}=useParams()
   return (
     <div className=' bg-slate-500 text-white'>
       user:{userid}
     </div>
   )
 }
 
 export default User
 