import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import * as JobsServises from '../Component/services/JobsServises'
export default function DeletePost({
    match
 
}) {
    let history = useHistory();


    useEffect(()=>{
       JobsServises.deleteById(match.params._id)
      history.push('/jobs')
    },[])
    
    return (
        <div>
            
        </div>
    )
}
