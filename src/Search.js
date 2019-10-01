import React from 'react';
import './Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      printType: 'all',
      bookFilter: ''
    }
	}
	
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
          search: event.target.searchValue.value,
        })
        this.props.generateURL(event.target.searchValue.value, this.state.printType, this.state.bookFilter);
    }

    handleFilterChange = newFilter => {
      console.log(newFilter);
      this.setState({
      bookFilter: newFilter
      })
      console.log('Filter change ran!')
    }


    handlePrintTypeChange = newPrintType => {
      console.log(newPrintType);
      this.setState({
      printType: newPrintType
      })
      console.log('Print type change ran!')
    }

    render(){
      console.log(this.state.printType)
        return (
        	<form className='searchBar' onSubmit={this.handleSubmit}>
						<input name='searchValue' type="text" id='searchValue' placeholder='Enter a book'></input>
            <button type="submit">Submit</button>
            <div className='filterSection' >
							<label htmlFor='printType'>Print Type: </label>
							<select id='printType' defaultValue='all' onChange={e => this.handlePrintTypeChange(e.target.value)}>
							<option value='all'>All</option>
							<option value='books'>Books</option>
							<option value='magazines'>Magazines</option>
							</select>
							<label htmlFor='bookType'>Book Type: </label>
							<select className='bookType' id='bookFilter' defaultValue='' onChange={e => this.handleFilterChange(e.target.value)}>
							<option value=''>No Filter</option>
							<option value='ebooks'>E-Books</option>
							<option value='free-ebooks'>Free</option>
              <option value='full'>Full</option>
							</select>
            </div>
          </form>
        )
    }
}

export default Search