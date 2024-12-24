import React from 'react';
import {BrowserRouter as Router , Routes ,  Route } from 'react-router-dom'
import Chat from './pages/Chat';
import Signin from './pages/SignIn';
import Signup from './pages/Signup';
import Settings from './pages/Settings';
import Explore from './pages/Explore';

 function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [showSettings, setShowSettings] = useState(false);
  // const [showExplorePage, setShowExplorePage] = useState(false);


  // if (!isAuthenticated) {
  //   return (
      
        // <Signup />
  //   );
  // }



  return (
    <>
    <Router>

      <Routes>
         <Route path='/chat' element={<Chat/>}/> 
         <Route path='/signin' element={ <Signin/>}/> 
         <Route path='/signup' element={<Signup/>}/> 
         <Route path='/explore' element={ <Explore/>}/> 
         <Route path='/settings' element={ <Settings/>}/> 
      </Routes>

    </Router>
    
    </>
  );
}

export default App;