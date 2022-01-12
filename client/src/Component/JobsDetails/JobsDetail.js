import * as JobsServises from '../services/JobsServises'
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
        </div>
    </section>
)

}
export default JobsDetails