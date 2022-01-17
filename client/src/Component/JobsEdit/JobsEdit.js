import './JobsEdit.css'
import * as JobsServises from '../services/JobsServices'
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

const JobsUpdate = ({
    match
})=>{
    const[job,setJob] = useState({})
    
    const history = useHistory();
    useEffect(() => {
        //get from db and set in state. Form will access it from there
        JobsServises.getOne(match.params._id)
            .then(res => {
                setJob(res)
            });
    },[]);
     console.log(job);
    const onUpdateJobsSubmitHandlers = (e) => {
        e.preventDefault();
        JobsServises.updateJobs({
          title:e.target.title.value,
          description:e.target.description.value
          
        })
       // const { name,description } = e.target;
        //setData(data =>({...data,title:`${name.value}`,description:`${description.value}`}))
      
        
        
      
    };
 
    
     console.log(job.title);
     

return(
  <div className="Boss">
    <form >
    <div>
        <label htmlFor="name">Name Jobs</label>
             <span className="input">
                <input type="text" name="name" id="name" placeholder="Name" value={job.title} onChange={onUpdateJobsSubmitHandlers} />
                  <span className="actions"></span>
             </span>

   
        <label htmlFor="description">Description</label>
             <span className="input">
                <textarea rows="4" cols="30" type="text" name="description" id="description"
                        placeholder="Description" value={job.description} onChange={onUpdateJobsSubmitHandlers}></textarea>
                           <span className="actions"></span>
             </span>      
             <input className="button submit" type="submit" value="Edite Jobs" />
    </div>                      
    </form> 
    </div>                  
)

}
export default JobsUpdate;