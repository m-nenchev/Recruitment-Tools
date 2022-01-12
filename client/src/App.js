
import { Route, Switch } from 'react-router-dom';

import Header from './Component/Header/Header'
import Jobs from './Component/Jobs/Jobs'
import JobsCreate from './Component/JobsCreate/JobsCreate'
import JobsEdit from './Component/JobsEdit/JobsEdit'
import JobsDelete from './JobsDelete/JobsDelete'
import JobsDetails from './Component/JobsDetails/JobsDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Switch>
      
      <Route exact path="/jobs/edit:_id"  component={JobsEdit} /> 
      <Route exact path="/jobs/delete/:_id"  component={JobsDelete}/> 
     <Route exact path="/"  component={Header}/>
     <Route  exact path="/jobs"  component={Jobs}/>
     <Route exact path="/jobs/create"  component={JobsCreate}/>  
     <Route exact path="/jobs/details/:_id"  component={JobsDetails} /> 
   
    
     </Switch>  
      
      
      </div>
  );
}

export default App;
