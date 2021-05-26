import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Drawer from './components/navigations/drawer';
import Appbar from './components/navigations/appbar';
import Mobile from './components/navigations/mobile';

/* components */
import Home from './components/pages/home'
import Comment from './components/pages/comment'


function App() {
  return (<Router>
    <div className='flex flex-row full'>
      <Drawer />
      <div className='flex-1 flex flex-col justify-center items-center'>
        <Appbar />
        <Mobile />
        <div className='w-full'>


          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Comment} path='/comment' />
          </Switch>

        </div>

      </div>

    </div>
  </Router>
  );
}

export default App;
