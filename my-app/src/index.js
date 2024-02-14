import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './components/Sidebar/sidebar';
import Analyse from './components/Analytics/analyse';
import Users from './components/Users/users';
import Orders from './components/Orders/orders';
import RightSection from './components/RightSection/rightSection';
import translations_es from './translations/es/translations.json';
import translations_en from './translations/en/translations.json'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapedValue:false},
  lng: "en",
  resources:{
    en:{
      global:translations_es
    },
    es:{
      global: translations_en
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
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
    </I18nextProvider> 
  </React.StrictMode>
);
