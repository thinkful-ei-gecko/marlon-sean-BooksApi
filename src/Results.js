import React from 'react';
import ReactDOM from 'react-dom'

class Results extends React.Component{
  
        render(){
            console.log(this.props.books)
            if(this.props.books !== 'null' || 'undefined') {
                const data=this.props.books.items.map(newBook => (<li>{newBook.volumeInfo.title}</li>)) ;     
            }
        return (
            <ul class='resultsList'>
                {this.props.books}
            </ul>
        );
    }
}

export default Results