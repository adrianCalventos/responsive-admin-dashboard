import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './Sidebar/sidebar';
import Analyse from './Analytics/analyse';
import Users from './Users/users';
import Orders from './Orders/orders';
import RightSection from './RightSection/rightSection';

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
