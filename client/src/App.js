import './App.css';
import landing from './components/landing/landing';
import Videogames from "./components/videogames/Videogames"
import Details from './components/Details/Details';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';
import NotFound from './components/NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
  <>
    <Switch>
      <Route exact path="/" component={landing}/>
      <Route exact path="/videogames" >
        <Videogames/>
      </Route>
      <Route exact path="/videogame/create" >
        <CreateVideogame/>
      </Route>
      <Route exact path="/videogame/:id" >
        <Details/>
      </Route>
    
      <Route path="*" component={NotFound }/> 
    </Switch>
      
     
   
    </>
  );
}

export default App;