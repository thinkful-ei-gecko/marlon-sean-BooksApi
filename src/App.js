import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import FilterBar from '/.FilterBar';
import Search from './Search';
import Header from './Header';
import Results from './Results';

class App extends React.Component {
  
  state={};


  updateState(response){
      this.setState(response);
  }

  componentDidMount(){
     fetch('https://www.googleapis.com/books/v1/volumes')
        .then(response => response.ok ? response.json() : Promise.reject("Something went wrong here"))
        .then(response => this.updateState(response))
        .then(data => {
          const booksList = Object.keys(data).map(key=>data[key].item)
        })

  }

  render() {
  return (
    `<div className="App">

    </div>`
  )
  }
}

export default App;
