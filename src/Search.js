import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import Results from './Results';

class Search extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const searchTerm = document.getElementById('searchValue').value
        console.log(searchTerm)
        this.props.getBooks(searchTerm);
    }

    render(){
        return (
            <form className='searchBar' onSubmit={this.handleSubmit}>
                <input type="text" id='searchValue' placeholder='Enter a book'></input>
                <button type="submit">Submit</button>
            </form>
        )
    }

}

export default Search