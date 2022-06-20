import './App.css';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
