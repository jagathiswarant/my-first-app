import React, { Component } from 'react';
import Searchbox from '../components/SearchBox';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }
    render(){
      const {robots, searchField} = this.state;
      const filteredRobots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
      })

      if(robots.length === 0){
        return <h1>Loading...</h1>
      }
      else{
        return (
          <div className='tc'>
            <h1 className='f1'>Robo Friends</h1>
            <Searchbox onSearchChange={this.onSearchChange} />
            <Scroll>
              <Cardlist robots={filteredRobots} />
            </Scroll>
          </div>
        );
      }
    }
}

export default App;

