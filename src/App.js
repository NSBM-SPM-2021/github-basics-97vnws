

import NavBar from './components/NavBar';
import LibraryManagementSystem from './components/Library Management System';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import NotFound from './components/NotFound';
import { BrowserRouter, Route,Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component={LibraryManagementSystem} />
      <Route exact path="/all" component={AllUsers} />
      <Route exact path="/add" component={AddUser} />
      <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
