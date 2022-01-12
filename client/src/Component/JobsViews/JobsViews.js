import {Link} from 'react-router-dom'
import './JobsViews.css'
import {useState, useEffect } from 'react'
import Candidates from '../Candidates/Candidates'
const JobsViews = ({
 _id,   
title,
description
})=>{
   
    const[can,setCan]= useState([{}])
   
      
      console.log(_id);
return(
    <ul className="JobsName">
        <li>Jobs Name: {title}</li>
        <li>description: {description}</li>
      <Link to={`/jobs/details/${_id}`}><button className="button-edit">JobsView</button></Link>
    </ul>
)


}
export default JobsViews