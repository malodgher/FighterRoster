import React, { Component } from 'react';
import './App.css';
import PanelBoard from '../components/PanelBoard';
import SearchBox from '../components/SearchBox';
import {fighters} from '../components/fighters';

class App extends Component {
    constructor(){
        super();
        this.state = {
            fighters: fighters,
            searchField: ''
        };
    }
    
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    
  render() {
    const {fighters, searchField} = this.state;
    const filteredFighters = fighters.filter(charc =>{
        return charc.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return (
      <div className="compboard">
        <h1>Fighter Roster</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <PanelBoard fighters={filteredFighters}/>
      </div>
    );
  }
}

export default App;
