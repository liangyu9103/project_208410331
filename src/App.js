import React,{Component} from 'react';
import CardList31 from '../components/CardList31';
import { robots } from './robots';
import SearchBox31 from '../components/SearchBox31';
import Scroll31 from '../components/Scroll31';
// import '';

class App extends Component   {
    constructor() {
    super();
    this.state = {
    robots: [],  
    robots: robots,
    searchfield: ''
    };
}
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));  
}

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
};  
render() {
    const filteredRobots = this.state.robots.filter(robot => {
    return robot.name  
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {

    return (
        <div className='tc'>
          <h1>DEMO</h1>
      <SearchBox31 searchChange={this.onSearchChange} />
      <Scroll31>
      <CardList31 robots={filteredRobots} />;
      </Scroll31>
        </div> 
    );
   }
  }
};

export default App; 