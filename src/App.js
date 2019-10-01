import React from 'react';
import './App.css';
import Search from './Search';
import Header from './Header';
import Results from './Results';

class App extends React.Component {
  state={
    booksList: [],
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
  }

  updateBooksList(response){
      this.setState({
        booksList: response
      })
  }

  generateURL = (search, printType, filter) => {
    let printTypeString = `&printType=${printType}`
    let filterString = `&filter=${filter}`
 
    if(filter === ''){
     filterString = '';
    }
  
    let newBaseURL = `https://www.googleapis.com/books/v1/volumes?q=${search}${printTypeString}${filterString}`;

    this.setState({baseURL: newBaseURL}, this.getBooks)
  }
  getBooks = () => {
    let baseURL = this.state.baseURL
    console.log(baseURL)
      fetch(`${baseURL}`)
      .then(response => response.ok ? response.json() : Promise.reject("Something went wrong here"))
      .then(response => {
        this.updateBooksList(response.items)
        console.log(this.state.booksList)
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search getBooks={this.getBooks} generateURL={this.generateURL}/>
        <Results books={this.state.booksList} />
      </div>
    )
  }
}

export default App;
