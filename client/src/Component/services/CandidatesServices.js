const urlCandidates = 'http://localhost:5000/candidates' 

export function getAllCandidates(){

    return fetch(urlCandidates)
    .then(res => res.json())
    .catch(err => console.error(err));
  }

  