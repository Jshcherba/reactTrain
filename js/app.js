import React from 'react';
import ReactDOM from 'react-dom';

class Greetings extends React.Component {
    render() {
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(<Greetings/>, document.getElementById('main'));