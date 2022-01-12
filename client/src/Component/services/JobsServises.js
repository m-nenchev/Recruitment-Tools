const url ='http://localhost:5000/jobs'

export function getAllJobs(){

  return fetch(url)
  .then(res => res.json())
  .catch(err => console.error(err));
}

export const createJobs  = (data)=>{
   
    
    return fetch(url, {
        method: 'POST', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data)
         
       })
       
    

}
export function updateJobs(_id) {
 

  return fetch(`${url}/${_id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id })
  })
      .then(response => response.json())
      .catch(err => console.error(err));
}

export function getOne(_id) {
  return fetch(`${url}/${_id}`)
      .then(response => response.json())
      .catch(err => console.error(err));
};
export function deleteById(_id) {

    return fetch(`${url}/${_id}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .catch(err => console.error(err));
}

