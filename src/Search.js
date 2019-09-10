import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import Results from './Results';


class Search extends React.Component(props) {

        handleSubmit = event => {
            event.preventDefault();
            const.searchTerm = document.getElementById("searchValue").value
            this.props.getBooks(searchTerm);
        }

        
        render(){
            return (
                <form>
                    <input type="text" onClick={e => this.props.getResults(e.target.value) }></input>
                    <Results />
                    </form>
            )
        }

}

export default Search