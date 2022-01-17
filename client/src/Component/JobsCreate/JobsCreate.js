import './JobsCreate.css'
import * as JobsServises from '../services/JobsServices'
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

const JobsCreate = ({
  match
})=>{

    //let h = match.params._id
    const history = useHistory();
    
    const onCreateJobSubmitHandlers = (e) => {
        e.preventDefault();
        JobsServises.createJobs({
          title:e.target.name.value,
          description:e.target.description.value
          
        })
       // const { name,description } = e.target;
        //setData(data =>({...data,title:`${name.value}`,description:`${description.value}`}))
      
        
        history.push('/jobs')
        
      
    };
 
    
     
     

return(
  <div className="Boss">
    <form onSubmit={onCreateJobSubmitHandlers}>
    <div>
        <label htmlFor="name">Name Jobs</label>
             <span className="input">
                <input type="text" name="name" id="name" placeholder="Name" />
                  <span className="actions"></span>
             </span>

   
        <label htmlFor="description">Description</label>
             <span className="input">
                <textarea rows="4" cols="30" type="text" name="description" id="description"
                        placeholder="Description"></textarea>
                           <span className="actions"></span>
             </span>      
             <input className="button submit" type="submit" value="Create Jobs" />
    </div>                      
    </form> 
    </div>                  
)

}
export default JobsCreate;