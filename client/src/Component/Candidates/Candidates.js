import { useState,useEffect } from "react";
function Candidates({
    _id,
   
}){

    const urlCandidates = 'http://localhost:5000/candidates'
    const[data,setData] = useState([{}])
    const [toAdd,setToAdd] = useState('');
    const[canId,setCanId] = useState([{}])
    const[candViewId,setCandViewId]=useState([])

      
          
    useEffect(()=>{
        
       fetch(urlCandidates)
       .then(res => {
        return res.json();
        })
        .then(post => {
        setData(post);
        });
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
                
                'Content-Type': 'text/plain'
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

<button  id={_id} onClick={onCandidateAddClickHandler} >Add Candidat</button>



<div>
    <ul>
    
    </ul>
</div>
   
   
    </div>
    
        )}
        export default Candidates;