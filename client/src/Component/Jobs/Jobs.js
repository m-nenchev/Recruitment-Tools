import { useState,useEffect } from "react";

import './Jobs.css'

import JobsViews from '../JobsViews/JobsViews'

function Jobs(){

const[data,setData] = useState([{}])

useEffect(()=>{
   fetch('http://localhost:5000/jobs')
   .then(res => {
    return res.json();
    })
    .then(post => {
    setData(post);
    });
},[])


   
    return(
<div>
   <form action="">
   <ul> 
              {data.map(joke =>{
                 
                      
                  return(
                  <div className="Form" key={joke._id}>
                  {<JobsViews   {...joke}   /> }
               
                  </div>
                  )
                
                  
                  })}  
            

             
   </ul>
   
 

   </form>
</div>

    )}
    export default Jobs;