import React, { Component } from 'react';
import CardList from '../Components/CardList';
import {robots} from '../Components/robots';
import SearchBox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {

    state = {
        robots: robots,
        searchField: ''
    }

    changedSearch = (event) => {
       this.setState({
           searchField: event.target.value
       })
    }

    render(){

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField);
        })
        
        return (
            <div className="tc">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBox change={this.changedSearch}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>           
        )
    }
}

export default App;