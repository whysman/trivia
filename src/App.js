import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';

export default function App(){
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={Secured} />
        </div>
      </BrowserRouter>
    );
};