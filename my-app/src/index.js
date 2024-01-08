import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './components/Sidebar/sidebar';
import Analyse from './components/Analytics/analyse';
import Users from './components/Users/users';
import Orders from './components/Orders/orders';
import RightSection from './components/RightSection/rightSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"></link>
    <div class="container">
        <Sidebar/>
        <main>
          <Analyse/>
          <Users/>
          <Orders/>
      </main>
      <RightSection/>
      
    </div>
    
  </React.StrictMode>
);
