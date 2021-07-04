import React, { Component } from 'react'

export class About extends Component {
    constructor(props){
        super(props)
        this.state = {version: "1.0.0", note: "This is devotsUI about", ago: 0}
        // this.showMessage = this.showMessage.bind(this)
    }

    render() {
        return (
            <div className="text-center">
                <h4 className="font-bold text-4xl">About</h4>
                <h5 className="text-lg font-bold">Vesion {this.state.version}</h5>
                <p>Created {this.state.ago} seconds ago</p>
                <p>{this.state.note}</p>
                <button 
                    className="py-1 px-2 text-white bg-green-500 rounded hover:bg-green-400" 
                    onClick={() => this.showMessage()}
                >Show message</button>
            </div>
        )
    }

    showMessage() {
        console.log('Message shown')
        console.log('Context is: ', this)
        console.log('Current state: ', this.state)
    }

    updateAgo() {
        this.setState(state => ({
            // ...state,
            ago: state.ago + 1
        }));
    }

    componentDidMount(){
        console.log('Component did mount')
        this.interval = setInterval(() => this.updateAgo(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default About
