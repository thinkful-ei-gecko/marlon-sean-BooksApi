import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import FilterBar from '/.FilterBar';
import Search from './Search';
import Header from './Header';
import Results from './Results';

class App extends React.Component {
  
  state={
    volumeSearch:'',
    currentList:'',
  };


  updateState(response){
      this.setState({volumeSearch:response})
  }

  updateStateList(booksList){
    this.setState({currentList:booksList})
  }

  getResults(onClick){
    this.updateState(searchParameters);
     fetch(`https://www.googleapis.com/books/v1/volumes/q=${this.state.volumeSearch}`)
        .then(response => response.ok ? response.json() : Promise.reject("Something went wrong here"))
        .then(response => this.updateState(response))
        .then(data => {
          const booksList = Object.keys(data).map(key=>data[key].item)
          this.updateStateList(booksList);
        })
        return
  }

  render(props) {
  return (<div className="App" >
           <Search onClick={this.props.onClick}/>
           <Results results={this.getResults(onClick)}/>
           </div>);
  }
}

export default App;
