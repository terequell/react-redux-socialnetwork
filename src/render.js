import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPostItem} from './redux/state'
import {BrowserRouter} from 'react-router-dom'

export let reRenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>  
         <App appState = {state} addPostItem = {addPostItem}/>
      </BrowserRouter>, 
         document.getElementById('root'));


}
