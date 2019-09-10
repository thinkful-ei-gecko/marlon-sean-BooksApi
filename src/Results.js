import React from 'react';
import ReactDOM from 'react-dom'

class Results extends React.Component{
  
    render(){
        
    const data=this.props.books.map(newBook => {
        return(
            <li key={newBook.id}>
                <h3>{newBook.volumeInfo.title}</h3>
                <img src={newBook.volumeInfo.imageLinks.thumbnail} alt={newBook.volumeInfo.title}></img>
                <p>Author: {newBook.volumeInfo.authors}</p>
                <p>{newBook.volumeInfo.description}</p>
                {(newBook.saleInfo.saleability === 'FOR_SALE') ? <p>Price: {newBook.saleInfo.retailPrice.amount}</p> : <p></p>}
            </li>
            )
        })
     ;    

    return (
        <ul className='resultsList'>
          {data}
        </ul>
    );
    }
}

export default Results