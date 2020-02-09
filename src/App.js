import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/CardList";
import {SearchBoxComponent} from "./components/searchBox/SearchBox.component";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() { // life cycle method automatically gets called by react
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // convert to Json format java understands
      .then(users => this.setState({ monsters: users })) // set state
  }

  setOnChange = (e) => {
    (
      this.setState({searchField: e.target.value}) // second argument of setState to immediate update aSyncro
    );
  }

  render() {
    const { monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    ))
   
    return (
      <div className="container">
        <h1>Monsters</h1>
        <input
          type="search"
          placeholder="search monsters"
          onChange = {this.setOnChange}
        />
        <SearchBoxComponent
          onChanged = {event => (this.setState({searchField : event.target.value}))} // Calls Component
          placeholder = "search Monster" // because of the dynamic placeholder
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;