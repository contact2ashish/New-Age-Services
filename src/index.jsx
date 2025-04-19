import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Services from './Components/Services/Services';
import TermsAndConditions from './Components/Terms&Conditions/Terms&Conditions';
import PrivacyPolicy from './Components/Privacy&Policy/Privacy&Policy';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/Services/Services" element={<Services />}/>
      <Route path="/Terms&Conditions/Terms&Conditions" element={<TermsAndConditions />}/>
      <Route path="/Privacy&Policy/Privacy&Policy" element={<PrivacyPolicy />}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
