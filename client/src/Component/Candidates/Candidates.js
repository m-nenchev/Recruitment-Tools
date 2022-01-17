import { useState,useEffect } from "react";
import * as CandidatesServises from '../services/CandidatesServices'
import * as JobsServices from '../services/JobsServices'
function Candidates({
    _id,
   

}){

    
    const[data,setData] = useState([{}])
    const [toAdd,setToAdd] = useState('');
    const[candidat,setCandidat] = useState([{}])
    const[candViewId,setCandViewId]=useState([])

      
   useEffect(()=>{
        CandidatesServises.getAllCandidates()
        .then(res => setData(res))
    },[])       
    
    useEffect(() => {
        JobsServices.getJobsCandidates(_id)
        .then(res => setCandidat(res))
    },[])

    
    const onAddCandidatesSelectChangeHandler = (e)=>{
        e.preventDefault();
        const dropdown = e.target;
        let candidateId = dropdown[dropdown.selectedIndex].id;
        setToAdd(candidateId);
       
    }
     const onCandidateAddClickHandler = (e)=>{
        e.preventDefault();
       setCandViewId(e.target.id)
       let data = {candidateId:toAdd}
       
    
        fetch(`http://localhost:5000/jobs/${_id}/candidates`,{
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
           
        }).then(res => console.log(res))
      
        
     }
     
     
     
     
     const onJobCandidateDeleteHandler = (e) => {
        e.preventDefault();
        let idd = e.target.id
        
        fetch(`http://localhost:5000/jobs/${_id}/candidates/${idd}`,{
            method: 'DELETE',
            headers: {
             
                'Content-Type': 'text/plain'
            },
        }).then(res => console.log(res))
        var element = document.getElementById('candidat');
           element.remove() 
            
    }
    
       console.log(candidat);
        return(
    <div>
       <select onChange={onAddCandidatesSelectChangeHandler} >
<option >Select...</option>
{data.map(candidate =>
    <option
        key={candidate._id}
        id={candidate._id}
    >
        {`${candidate.firstName} ${candidate.lastName}`}

    </option>)}
    
</select>

<ul>
 {candidat.map(candidates =>
    <li key={candidates._id}>
      {`${candidates.firstName} ${candidates.lastName} ${candidates.lastName}`}
    </li>
    )}
</ul>
<button  id={_id} onClick={onCandidateAddClickHandler} >Add Candidat</button>



<div>
    <ul>
    
    </ul>
</div>
   
   
    </div>
    
        )}
        export default Candidates;