import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/main.scss');

class Greetings extends React.Component {
    render() {
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(<Greetings/>, document.getElementById('main'));