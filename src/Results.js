import React from 'react';
import ReactDOM from 'react-dom'

class Results extends React.Component {

    render(props){
        const data=props.results;
        return(
                <div>
                    <p>${data}</p>
                </div>
        );
    }
}

export default Results