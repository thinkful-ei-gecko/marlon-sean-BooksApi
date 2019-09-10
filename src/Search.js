import React from 'react';
import ReactDOM from 'react-dom'

class Search extends React.Component {


        render(e){
            e.preventDefault();
            return (
                <form class='searchBar'>
                    <input type="text" id='searchValue' placeholder='Enter a book'></input>
                    <button type="submit" bookSearch={() => this.props.getBooks(document.getElementById('searchValue').value)}>Submit</button>
                </form>
            )
        }

}

export default Search