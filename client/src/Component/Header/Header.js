import { Link } from 'react-router-dom';
import './Header.css'

function Header(){
    return(
<header className="conteiner">       
   <nav className="navbar">
        <section>
            <ul>
                <li><Link className="listitem"  to="/jobs/create" >JobsCreate</Link></li>
                <li><Link className="listitem"  to="/jobs" >Jobs</Link></li>
                <li><Link className="listitem"  to="/candidates" >Candidates</Link></li>
                <li><Link className="listitem"  to="/interviews" >Interviews</Link></li>
            </ul>
        </section>
   </nav>  
</header>    
    )
}
export default Header;
