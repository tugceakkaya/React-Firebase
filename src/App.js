
import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './component/Login';
import { auth } from './firebase';
import Home from './component/Home';
function App() {

    const [user,setUser]=useState(null);
useEffect(() => {
auth.onAuthStateChanged((authUser)=>{
 
  if(authUser){
    setUser(authUser);
  }
  else{
    setUser(null);
  }

    });

}, []);

      return (
    <div className="app">
      
{user ? <Home user={user}/> :<Login/>}
</div>
  );
}

export default App;
