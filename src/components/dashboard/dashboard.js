import React,{ Component } from 'react';
import Card from './card.js';

class dashboard extends Component{
    state={
        movies:[]
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(Data => {
            const { results } = Data;
            this.setState({
                movies:[...this.state.movies,...results]
            })
        })
    }
    render(){
        return (
            <div className="container home">
                <div className="section white">
                    <h4 className="center">Active Users</h4>
                    <div className="row container">
                        <div className="row">
                            <Card movies={this.state.movies} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default dashboard;
