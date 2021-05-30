import React, { Component } from "react";

import "./App.css";

import CardList from './components/CardList/CardList.components';
import SearchBox from './components/SearchBox/SearchBox.component';
import Footer from './components/Footer/Footer.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      appname: "Monsters Rolodex",
      monsters: [],
      isLoading: false,
      searchString: "",
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) =>
        this.setState({ monsters: response, isLoading: false })
      );
  }

  render() {
    const { isLoading, monsters, searchString } = this.state;

    const filteredMonster = monsters.filter( 
      monster => monster.name.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
      <>
      <div className="App-container">
        <h1 className="App-title">{this.state.appname}</h1>
        {
          isLoading ? <h2 className="loading-text">Loading...</h2>
          : 
            <>
              <SearchBox placeholder="Search Monsters" handleChange={ e => this.setState({ searchString: e.target.value }) }/>
              
              <CardList monsters={filteredMonster} />

            </>
        }
      </div>
      <Footer />
      </>
    );
  }
}

export default App;
