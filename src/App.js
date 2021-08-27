import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Drawer from './components/navigations/drawer';
import Appbar from './components/navigations/appbar';
import Mobile from './components/navigations/mobile';

/* components */
import Home from './components/pages/home'
import Comment from './components/pages/comment'
import Login from './components/pages/login';
import Profile from './components/pages/profile';
import { AppContext } from './context/context';
import Settings from './components/pages/settings';
import Editprofile from './components/pages/editprofile';


function App() {
  return (
    <AppContext>
      <Router>
        <div className='flex flex-row full '>
          <Drawer />
          <div className='flex-1 flex flex-col justify-center items-center'>
            <Appbar />
            <Mobile />
            <div className='w-full'>


              <Switch>
                <Route component={Home} path='/' exact />
                <Route component={Comment} path='/comment' />
                <Route component={Login} path='/login' />
                <Route component={Profile} path='/profile' />
                <Route component={Settings} path='/settings' />
                <Route component={Editprofile} path='/edit_profile' />

              </Switch>

            </div>

          </div>

        </div>
      </Router>
    </AppContext>
  );
}

export default App;
