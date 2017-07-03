import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class App extends Component {
    constructor(){
        super();
        this.state={
            elapsed: 0
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 50)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

   tick(){
       this.setState({elapsed: new Date() - this.props.first})
   }
    render() {
        var elapsed = Math.round(this.state.elapsed/100);
        var seconds = (elapsed/10).toFixed(1);
        return (
            <div className='container'>
                <h4>React Timer Application</h4>
                <p>This timer was started {seconds} seconds ago!</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App first={Date.now()} />, document.getElementById('root')
)

