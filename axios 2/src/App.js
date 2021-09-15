import React from 'react';
import './App.css'
import ContactApp from './components/ContactApp'





let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark purple-gradient d-flex justify-content-center">
        <h3 className="text-white text-center">React Hooks Server Calls Using Axios(Contact App)</h3>
      </nav>
      <ContactApp />
    </React.Fragment>
  )
}


export default App;






