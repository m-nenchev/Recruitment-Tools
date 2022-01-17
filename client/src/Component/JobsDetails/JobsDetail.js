import * as JobsServises from '../services/JobsServices'
import Candidates from '../Candidates/Candidates'
import { useState,useEffect } from 'react'
import './JobsDetails.css'
const JobsDetails = ({
match 
})=>{ 
    const[data,setData] = useState([])

     useEffect(() => {
        JobsServises.getOne(match.params._id)
        .then(res => setData(res))
     },[])
     
    
     console.log(data);
    return(
    <section>
        <div className='jobsDteail'>
           <p>{data.title}</p>
           <p>{data.description}</p>
           <p><Candidates _id={match.params._id}/></p>
        </div>
    </section>
)

}
export default JobsDetails